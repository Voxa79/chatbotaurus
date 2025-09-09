import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalAIHomepage } from './components/LocalAIHomepage';
import { LocalAIServices } from './components/LocalAIServices';
import { LocalAISolutions } from './components/LocalAISolutions';
import IAEuropaWebsite from './components/IAEuropaWebsite';
import { ROICalculatorPage } from './pages/ROICalculatorPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { DemoPage } from './pages/DemoPage';
import { ResourcesDocsPage } from './pages/ResourcesDocsPage';
import { ResourcesCaseStudiesPage } from './pages/ResourcesCaseStudiesPage';
import { ResourcesWebinarsPage } from './pages/ResourcesWebinarsPage';
import { EventsPage } from './pages/EventsPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ServiceSearXNGPage } from './pages/ServiceSearXNGPage';
import { ServiceNeo4jPage } from './pages/ServiceNeo4jPage';
import { ServiceLangfusePage } from './pages/ServiceLangfusePage';
import { ServiceOllamaPage } from './pages/ServiceOllamaPage';
import { ServiceN8NPage } from './pages/ServiceN8NPage';
import { ServiceQdrantPage } from './pages/ServiceQdrantPage';
import { ServiceOpenWebUIPage } from './pages/ServiceOpenWebUIPage';
import { ServiceSupabasePage } from './pages/ServiceSupabasePage';
import { ServiceDockerComposePage } from './pages/ServiceDockerComposePage';
import { ServiceCaddyPage } from './pages/ServiceCaddyPage';
import { ServiceScriptsAutomationPage } from './pages/ServiceScriptsAutomationPage';
import { ServiceFlowisePage } from './pages/ServiceFlowisePage';
// Sector pages
import { SectorFinancePage } from './pages/sectors/SectorFinancePage';
import { SectorLegalPage } from './pages/sectors/SectorLegalPage';
import { SectorHealthcarePage } from './pages/sectors/SectorHealthcarePage';
import { SectorPublicPage } from './pages/sectors/SectorPublicPage';
import { SectorEducationPage } from './pages/sectors/SectorEducationPage';
import { SectorRetailPage } from './pages/sectors/SectorRetailPage';
import { SectorManufacturingPage } from './pages/sectors/SectorManufacturingPage';
// Use case pages
import { UsecaseSupportClientPage } from './pages/usecases/UsecaseSupportClientPage';
import { UsecaseDocumentAnalysisPage } from './pages/usecases/UsecaseDocumentAnalysisPage';
import { UsecaseWorkflowAutomationPage } from './pages/usecases/UsecaseWorkflowAutomationPage';
import { UsecaseStrategicIntelligencePage } from './pages/usecases/UsecaseStrategicIntelligencePage';
import { UsecaseDataDecisionPage } from './pages/usecases/UsecaseDataDecisionPage';
import { UsecaseTrainingPage } from './pages/usecases/UsecaseTrainingPage';
// New use case pages
import { UsecaseFraudDetectionPage } from './pages/usecases/UsecaseFraudDetectionPage';
import { UsecaseSupplyChainPage } from './pages/usecases/UsecaseSupplyChainPage';
import { UsecaseMarketingPersonalizationPage } from './pages/usecases/UsecaseMarketingPersonalizationPage';
import { UsecasePredictiveMaintenancePage } from './pages/usecases/UsecasePredictiveMaintenancePage';
import { UsecaseMedicalAssistantPage } from './pages/usecases/UsecaseMedicalAssistantPage';
import { UsecaseAlgorithmicTradingPage } from './pages/usecases/UsecaseAlgorithmicTradingPage';
import { UsecaseCybersecurityPage } from './pages/usecases/UsecaseCybersecurityPage';
import { UsecaseRealEstateManagementPage } from './pages/usecases/UsecaseRealEstateManagementPage';
import { InsuranceSectorPage } from './pages/sectors/InsuranceSectorPage';
// Accompaniment approach pages
import { ApproachDfyPage } from './pages/approaches/ApproachDfyPage';
import { ApproachDwyPage } from './pages/approaches/ApproachDwyPage';
import { ApproachDiyPage } from './pages/approaches/ApproachDiyPage';
// About page
import { AboutPage } from './pages/AboutPage';
// Documentation page
import { DocumentationPage } from './pages/DocumentationPage';

function App() {
  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LocalAIHomepage />} />
          <Route path="/services" element={<LocalAIServices />} />
          <Route path="/solutions" element={<LocalAISolutions />} />
          <Route path="/solutions/templates" element={<LocalAISolutions />} />
          <Route path="/solutions/*" element={<LocalAISolutions />} />
          <Route path="/ecosystem" element={<LocalAIServices />} />
          <Route path="/ecosystem/services" element={<LocalAIServices />} />
          <Route path="/ecosystem/architecture" element={<LocalAIServices />} />
          <Route path="/ecosystem/*" element={<LocalAIServices />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/docs" element={<ResourcesDocsPage />} />
          <Route path="/resources/case-studies" element={<ResourcesCaseStudiesPage />} />
          <Route path="/resources/webinars" element={<ResourcesWebinarsPage />} />
          <Route path="/resources/events" element={<EventsPage />} />
          <Route path="/resources/*" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/services/searxng" element={<ServiceSearXNGPage />} />
          <Route path="/services/neo4j" element={<ServiceNeo4jPage />} />
          <Route path="/services/langfuse" element={<ServiceLangfusePage />} />
          <Route path="/services/ollama" element={<ServiceOllamaPage />} />
          <Route path="/services/n8n" element={<ServiceN8NPage />} />
          <Route path="/services/qdrant" element={<ServiceQdrantPage />} />
          <Route path="/services/open-webui" element={<ServiceOpenWebUIPage />} />
          <Route path="/services/supabase" element={<ServiceSupabasePage />} />
          <Route path="/services/docker-compose" element={<ServiceDockerComposePage />} />
          <Route path="/services/caddy" element={<ServiceCaddyPage />} />
          <Route path="/services/scripts-automation" element={<ServiceScriptsAutomationPage />} />
          <Route path="/services/flowise" element={<ServiceFlowisePage />} />
          {/* Sector pages routes */}
          <Route path="/solutions/finance" element={<SectorFinancePage />} />
          <Route path="/solutions/legal" element={<SectorLegalPage />} />
          <Route path="/solutions/healthcare" element={<SectorHealthcarePage />} />
          <Route path="/solutions/public" element={<SectorPublicPage />} />
          <Route path="/solutions/education" element={<SectorEducationPage />} />
          <Route path="/solutions/retail" element={<SectorRetailPage />} />
          <Route path="/solutions/manufacturing" element={<SectorManufacturingPage />} />
          {/* Use case pages routes */}
          <Route path="/solutions/support-client" element={<UsecaseSupportClientPage />} />
          <Route path="/solutions/document-analysis" element={<UsecaseDocumentAnalysisPage />} />
          <Route path="/solutions/workflow-automation" element={<UsecaseWorkflowAutomationPage />} />
          <Route path="/solutions/strategic-intelligence" element={<UsecaseStrategicIntelligencePage />} />
          <Route path="/solutions/data-decision" element={<UsecaseDataDecisionPage />} />
          <Route path="/solutions/training" element={<UsecaseTrainingPage />} />
          {/* New use case pages routes */}
          <Route path="/solutions/fraud-detection" element={<UsecaseFraudDetectionPage />} />
          <Route path="/solutions/supply-chain" element={<UsecaseSupplyChainPage />} />
          <Route path="/solutions/marketing-personalization" element={<UsecaseMarketingPersonalizationPage />} />
          <Route path="/solutions/predictive-maintenance" element={<UsecasePredictiveMaintenancePage />} />
          <Route path="/solutions/medical-assistant" element={<UsecaseMedicalAssistantPage />} />
          <Route path="/solutions/algorithmic-trading" element={<UsecaseAlgorithmicTradingPage />} />
          <Route path="/solutions/cybersecurity" element={<UsecaseCybersecurityPage />} />
          <Route path="/solutions/real-estate-management" element={<UsecaseRealEstateManagementPage />} />
          {/* Sector pages */}
          <Route path="/solutions/insurance" element={<InsuranceSectorPage />} />
          {/* Accompaniment approach pages routes */}
          <Route path="/expertise/dfy" element={<ApproachDfyPage />} />
          <Route path="/expertise/dwy" element={<ApproachDwyPage />} />
          <Route path="/expertise/diy" element={<ApproachDiyPage />} />
          {/* About page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Documentation page */}
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;