import * as fs from 'fs';
import * as path from 'path';

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/\buseState\(/g, 'React.useState(');
  content = content.replace(/\buseEffect\(/g, 'React.useEffect(');
  content = content.replace(/\buseRef\(/g, 'React.useRef(');
  content = content.replace(/\buseContext\(/g, 'React.useContext(');
  content = content.replace(/\bcreateContext\(/g, 'React.createContext(');
  
  fs.writeFileSync(filePath, content);
}

function walk(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      if (fullPath.includes('App.tsx') || fullPath.includes('PresentationContext.tsx')) continue;
      fixFile(fullPath);
    }
  }
}

walk('src/slides');
walk('src/components');
