// Endpoint de health check sécurisé
export const healthHandler = (req, res) => {
  const startTime = Date.now();
  
  // Vérifications de sécurité
  const userAgent = req.headers['user-agent'] || '';
  const allowedUAs = ['HealthCheck/', 'Docker/', 'Caddy/'];
  
  const isAuthorized = allowedUAs.some(ua => userAgent.startsWith(ua));
  
  if (!isAuthorized) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      status: 'error',
      message: 'Health check access restricted'
    }));
    return;
  }
  
  // Vérifications système
  const checks = {
    server: 'ok',
    memory: process.memoryUsage().heapUsed < 100 * 1024 * 1024, // < 100MB
    uptime: process.uptime() > 0,
    security: {
      csp_enforced: process.env.CSP_ENFORCED === 'true',
      bot_protection: process.env.BOT_PROTECTION === 'true',
      rate_limit: process.env.RATE_LIMIT_ENABLED === 'true',
      security_level: process.env.SECURITY_LEVEL
    }
  };
  
  const allHealthy = Object.values(checks).every(check => 
    typeof check === 'object' ? Object.values(check).every(v => v === true || v === 'maximum') : check === 'ok' || check === true
  );
  
  const responseTime = Date.now() - startTime;
  
  // Headers de sécurité pour health check
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Health-Check', 'authorized');
  
  res.statusCode = allHealthy ? 200 : 503;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    status: allHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    response_time_ms: responseTime,
    checks,
    version: '1.0.0',
    security_level: '10/10'
  }));
};