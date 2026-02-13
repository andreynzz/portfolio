import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Font } from '@react-pdf/renderer';
import { 
  professionalExperience, 
  EducationTimeline, 
  STACK as TECH_SKILLS, 
  SOFT_SKILLS_KEYS,
  PROJECTS 
} from '@/src/data/content';

// Estilos do PDF (semelhante ao CSS, mas restrito)
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Helvetica', fontSize: 11, lineHeight: 1.5, color: '#333' },
  header: { marginBottom: 20, borderBottom: '1px solid #ccc', paddingBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 4 },
  role: { fontSize: 14, color: '#666', marginBottom: 6 },
  contactInfo: { flexDirection: 'row', gap: 10, fontSize: 9, color: '#555' },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', borderBottom: '1px solid #eee', marginBottom: 8, paddingBottom: 2, textTransform: 'uppercase', color: '#000' },
  
  // Experiência
  expItem: { marginBottom: 10 },
  companyLine: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  companyName: { fontWeight: 'bold', fontSize: 12 },
  period: { fontSize: 10, color: '#666' },
  jobTitle: { fontSize: 11, fontStyle: 'italic', marginBottom: 4 },
  bulletPoint: { flexDirection: 'row', marginBottom: 2, paddingLeft: 5 },
  bullet: { width: 10, fontSize: 10 },
  bulletText: { flex: 1, fontSize: 10 },

  // Skills
  skillsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  skillBadge: { backgroundColor: '#f0f0f0', padding: '2 6', borderRadius: 4, fontSize: 9 },

  // Projetos
  projectItem: { marginBottom: 8 },
  projectTitle: { fontSize: 11, fontWeight: 'bold' },
  projectLink: { color: '#0000EE', fontSize: 9, textDecoration: 'none' },
});

interface CurriculumPDFProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: any; // O objeto de traduções
  locale: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CurriculumPDF = ({ dict, locale }: CurriculumPDFProps) => {
  // Helpers para acessar as traduções profundamente
  const tExp = (key: string) => {
    const parts = key.split('.');
    let current = dict.Experience;
    parts.forEach(part => { if (current) current = current[part] });
    return current || key;
  };

  const tEdu = (key: string) => {
    const parts = key.split('.');
    let current = dict.Education;
    parts.forEach(part => { if (current) current = current[part] });
    return current || key;
  };

  const tSoft = (key: string) => dict.SoftSkills[key] || key;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{dict.HomePage.HeroPage.name}</Text>
          <Text style={styles.role}>{dict.HomePage.HeroPage.role}</Text>
          <View style={styles.contactInfo}>
            <Text>andrey.dhorapirola@gmail.com</Text>
            <Text>•</Text>
            <Link src='https://andreynz.dev' style={{ color: '#2A8DBF' }}>andreynz.dev</Link>
            <Text>•</Text>
            <Link src="https://www.linkedin.com/in/andreydahorapirola/" style={{ color: '#2A8DBF' }}>LinkedIn</Link>
            <Text>•</Text>
            <Link src="https://github.com/andreynzz" style={{ color: '#2A8DBF' }}>GitHub</Link>
            <Text>•</Text>
            <Link src="mailto:andrey.dhorapirola@gmail.com" style={{ color: '#2A8DBF' }}>Email</Link>
            <Text>•</Text>
            <Link src="https://wa.me/5511947530995" style={{ color: '#2A8DBF' }}>WhatsApp</Link>
            <Text>•</Text>
            <Text>São Paulo, Brazil</Text>
          </View>
        </View>

        {/* Resumo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{dict.HomePage.HeroPage.title}</Text>
          <Text style={{ fontSize: 10 }}>{dict.HomePage.HeroPage.description}</Text>
        </View>

        {/* Experiência Profissional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{dict.Experience.title}</Text>
          {professionalExperience.map((job, index) => (
            <View key={index} style={styles.expItem}>
              <View style={styles.companyLine}>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.period}>{tExp(`${job.translationKey}.period`)}</Text>
              </View>
              <Text style={styles.jobTitle}>{tExp(`${job.translationKey}.role`)}</Text>
              
              {/* Renderiza as responsabilidades dinamicamente baseada na contagem */}
              {Array.from({ length: job.responsibilityCount }).map((_, i) => (
                <View key={i} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    {tExp(`${job.translationKey}.res${i + 1}`)}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Educação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{dict.header.education}</Text>
          {EducationTimeline.map((edu, index) => (
            <View key={index} style={styles.expItem}>
              <View style={styles.companyLine}>
                <Text style={styles.companyName}>{edu.institution}</Text>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
              <Text style={styles.jobTitle}>{tEdu(`${edu.translationKey}.degree`)}</Text>
            </View>
          ))}
        </View>

        {/* Skills Técnicas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hard Skills</Text>
          <View style={styles.skillsContainer}>
            {Object.values(TECH_SKILLS).map((skill, index) => (
              <Text key={index} style={styles.skillBadge}>{skill}</Text>
            ))}
          </View>
        </View>
        
        {/* Soft Skills (Traduzidas) */}
        <View style={styles.section}>
           <Text style={styles.sectionTitle}>Soft Skills</Text>
           <View style={styles.skillsContainer}>
             {SOFT_SKILLS_KEYS.map((key, index) => (
               <Text key={index} style={styles.skillBadge}>{tSoft(key)}</Text>
             ))}
           </View>
        </View>

      </Page>
    </Document>
  );
};