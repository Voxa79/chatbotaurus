# Templates de Pages - Local AI Landing

## Template de Page Obligatoire

Toutes les nouvelles pages du site doivent inclure la **section UrgentSupportSection** en dernière position avant le footer.

### Utilisation du Template

1. **Copier le fichier template** :
   ```
   cp src/templates/PageTemplate.jsx src/pages/NouvellePagePage.jsx
   ```

2. **Modifier le nom d'export** :
   ```jsx
   export const NouvellePagePage = () => {
   ```

3. **Développer le contenu spécifique** entre `<LocalAIHeader />` et `<UrgentSupportSection />`

### Structure Obligatoire

```jsx
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const MaNouvellePage = () => {
  return (
    <div className="...">
      <LocalAIHeader />
      
      {/* Contenu spécifique de la page */}
      
      {/* OBLIGATOIRE - Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};
```

### Chemins d'Import selon l'Emplacement

- **Pages à la racine** (`src/pages/`) : 
  ```jsx
  import { UrgentSupportSection } from '../components/UrgentSupportSection';
  ```

- **Pages dans des sous-dossiers** (`src/pages/sectors/`, `src/pages/usecases/`, etc.) :
  ```jsx
  import { UrgentSupportSection } from '../../components/UrgentSupportSection';
  ```

### Bonnes Pratiques

1. **Position fixe** : La section UrgentSupportSection doit TOUJOURS être placée juste avant `<LocalAIFooter />`

2. **Animations** : Utiliser Framer Motion pour des transitions fluides

3. **Responsive** : Assurer la compatibilité mobile avec Tailwind CSS

4. **Accessibilité** : Inclure les attributs aria-label appropriés

### Vérification

Avant de déployer une nouvelle page, vérifier :

- ✅ Import de UrgentSupportSection
- ✅ Section placée avant LocalAIFooter
- ✅ Responsive design testé
- ✅ Accessibilité validée

### Pages Existantes

Toutes les pages suivantes incluent déjà UrgentSupportSection :

- Homepage (LocalAIHomepage.jsx)
- Services (LocalAIServices.jsx) 
- Solutions (LocalAISolutions.jsx)
- Toutes les pages dans `/pages/`
- Toutes les pages dans `/pages/sectors/`
- Toutes les pages dans `/pages/usecases/`
- Toutes les pages dans `/pages/approaches/`

---

**Important** : Cette section permet aux utilisateurs d'accéder instantanément à l'assistant IA Local AI pour obtenir de l'aide. Ne pas l'omettre sur les nouvelles pages.