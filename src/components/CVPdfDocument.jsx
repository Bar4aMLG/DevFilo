import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// تسجيل الخط العربي
Font.register({
  family: 'Cairo',
  fonts: [
    {
      src: '/Fonts/Cairo-Regular.ttf', // المسار من مجلد public
      fontWeight: 'normal',
    },
    {
      src: '/Fonts/Cairo-Bold.ttf', // إن وجد
      fontWeight: 'bold',
    },
  ],
});

// أنماط عامة تستخدم الخط العربي
const commonStyles = StyleSheet.create({
  page: {
    fontFamily: 'Cairo', // استخدام الخط العربي
    padding: 30,
    // direction: 'rtl', // دعم RTL غير مكتمل، سنعتمد على الكتابة العادية لكن الحروف العربية ستتصل
  },
});

// باقي الأنماط (يجب إزالة fontFamily: 'Helvetica' إن وجدت)
const classicStyles = StyleSheet.create({
  container: { flexDirection: 'row', height: '100%' },
  sidebar: {
    width: '30%',
    backgroundColor: '#4F46E5',
    padding: 20,
    color: 'white',
  },
  main: {
    width: '70%',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  name: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 15,
    border: '3px solid white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottom: '1px solid rgba(255,255,255,0.5)',
    paddingBottom: 4,
    marginBottom: 8,
  },
  skillItem: { fontSize: 11, marginBottom: 2 },
  bioText: { fontSize: 12, lineHeight: 1.5, marginBottom: 10 },
  projectTitle: { fontSize: 13, fontWeight: 'bold', color: '#4F46E5' },
  projectDesc: { fontSize: 11, marginTop: 3, marginBottom: 8 },
});

const modernStyles = StyleSheet.create({
  header: {
    backgroundColor: '#10B981',
    padding: 25,
    alignItems: 'center',
  },
  nameModern: { fontSize: 26, fontWeight: 'bold', color: 'white', marginTop: 10 },
  imageModern: {
    width: 70,
    height: 70,
    borderRadius: 35,
    border: '3px solid white',
  },
  content: { padding: 20 },
  bioModern: { fontSize: 12, marginBottom: 15, lineHeight: 1.5 },
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 },
  skillBadge: {
    backgroundColor: '#D1FAE5',
    color: '#065F46',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  projectCard: {
    border: '1px solid #E5E7EB',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

const minimalStyles = StyleSheet.create({
  containerMin: { flexDirection: 'row' },
  sidebarMin: {
    width: '30%',
    backgroundColor: '#111827',
    color: 'white',
    padding: 20,
    alignItems: 'center',
  },
  mainMin: {
    width: '70%',
    padding: 20,
  },
  imageMin: {
    width: 70,
    height: 70,
    borderRadius: 0,
    border: '2px solid #9CA3AF',
  },
  skillMinItem: {
    borderLeft: '2px solid #6B7280',
    paddingLeft: 5,
    fontSize: 10,
    marginBottom: 4,
  },
  bioMin: { fontSize: 12, marginBottom: 15 },
  projectMin: { marginBottom: 10 },
});

// باقي المكونات (بدون تغيير) ولكن احذف أي fontFamily: 'Helvetica' قديم
function ClassicTemplate({ name, photoUrl, skills, bio, projects }) {
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        <View style={classicStyles.container}>
          <View style={classicStyles.sidebar}>
            {photoUrl && <Image src={photoUrl} style={classicStyles.image} />}
            <Text style={classicStyles.name}>{name}</Text>
            <Text style={classicStyles.sectionTitle}>المهارات</Text>
            {skills.map((skill, idx) => (
              <Text key={idx} style={classicStyles.skillItem}>• {skill}</Text>
            ))}
          </View>
          <View style={classicStyles.main}>
            <Text style={{ ...classicStyles.sectionTitle, color: '#4F46E5', borderColor: '#4F46E5' }}>
              نبذة شخصية
            </Text>
            <Text style={classicStyles.bioText}>{bio}</Text>
            <Text style={{ ...classicStyles.sectionTitle, color: '#4F46E5', borderColor: '#4F46E5' }}>
              المشاريع
            </Text>
            {projects.map((proj, idx) => (
              <View key={idx}>
                <Text style={classicStyles.projectTitle}>{proj.name}</Text>
                <Text style={classicStyles.projectDesc}>{proj.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function ModernTemplate({ name, photoUrl, skills, bio, projects }) {
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        <View style={modernStyles.header}>
          {photoUrl && <Image src={photoUrl} style={modernStyles.imageModern} />}
          <Text style={modernStyles.nameModern}>{name}</Text>
        </View>
        <View style={modernStyles.content}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#10B981', marginBottom: 5 }}>نبذة عني</Text>
          <Text style={modernStyles.bioModern}>{bio}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#10B981', marginBottom: 5 }}>المهارات</Text>
          <View style={modernStyles.skillsRow}>
            {skills.map((skill, idx) => (
              <Text key={idx} style={modernStyles.skillBadge}>{skill}</Text>
            ))}
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#10B981', marginBottom: 5 }}>المشاريع</Text>
          {projects.map((proj, idx) => (
            <View key={idx} style={modernStyles.projectCard}>
              <Text style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 2 }}>{proj.name}</Text>
              <Text style={{ fontSize: 11 }}>{proj.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

function MinimalTemplate({ name, photoUrl, skills, bio, projects }) {
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        <View style={minimalStyles.containerMin}>
          <View style={minimalStyles.sidebarMin}>
            {photoUrl && <Image src={photoUrl} style={minimalStyles.imageMin} />}
            <Text style={{ fontSize: 18, marginTop: 15, marginBottom: 15, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 10, color: '#9CA3AF', marginBottom: 5, borderBottom: '1px solid #6B7280' }}>مهارات</Text>
            {skills.map((skill, idx) => (
              <Text key={idx} style={minimalStyles.skillMinItem}>{skill}</Text>
            ))}
          </View>
          <View style={minimalStyles.mainMin}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', borderBottom: '1px solid #D1D5DB', marginBottom: 8 }}>نبذة</Text>
            <Text style={minimalStyles.bioMin}>{bio}</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', borderBottom: '1px solid #D1D5DB', marginBottom: 8 }}>المشاريع</Text>
            {projects.map((proj, idx) => (
              <View key={idx} style={minimalStyles.projectMin}>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{proj.name}</Text>
                <Text style={{ fontSize: 11, marginTop: 2 }}>{proj.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function CVPdfDocument({ data }) {
  const { name, photo, skills, bio, projects, templateId } = data;
  const photoUrl = photo ? `http://localhost:5000${photo}` : null;

  if (templateId === 2) {
    return <ModernTemplate name={name} photoUrl={photoUrl} skills={skills} bio={bio} projects={projects} />;
  } else if (templateId === 3) {
    return <MinimalTemplate name={name} photoUrl={photoUrl} skills={skills} bio={bio} projects={projects} />;
  } else {
    return <ClassicTemplate name={name} photoUrl={photoUrl} skills={skills} bio={bio} projects={projects} />;
  }
}

export default CVPdfDocument;