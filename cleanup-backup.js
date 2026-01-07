const fs = require('fs');
const path = require('path');

// Pfade definieren
const backupFile = path.join(__dirname, 'data', 'backup.json');
const outputFile = path.join(__dirname, 'data', 'backup_cleaned.json');

// Datei einlesen
console.log('📖 Lese backup.json...');
let data;

try {
  const fileContent = fs.readFileSync(backupFile, 'utf-8');
  data = JSON.parse(fileContent);
} catch (error) {
  console.error('❌ Fehler beim Lesen der Datei:', error.message);
  process.exit(1);
}

// Überprüfen ob daylist existiert
if (!data.daylist || !data.daylist.elements) {
  console.error('❌ Fehler: daylist.elements nicht gefunden!');
  process.exit(1);
}

console.log(`📊 Gefunden: ${data.daylist.elements.length} Einträge`);

// daylist.elements chronologisch sortieren (nach 'date' Feld)
console.log('🔄 Sortiere Tage chronologisch...');
data.daylist.elements.sort((a, b) => {
  const dateA = a.date || 0;
  const dateB = b.date || 0;
  return dateA - dateB;
});

// Entferne leere Einträge (Objekte ohne 'appointments' oder 'date')
console.log('🧹 Entferne leere Einträge...');
const beforeCount = data.daylist.elements.length;
data.daylist.elements = data.daylist.elements.filter(item => item.date && item.appointments);
const afterCount = data.daylist.elements.length;
const removedCount = beforeCount - afterCount;

if (removedCount > 0) {
  console.log(`   ➜ ${removedCount} leere Einträge entfernt`);
}

// Statistik anzeigen
console.log('\n📈 Statistik:');
console.log(`   • Gesamte Einträge: ${data.daylist.elements.length}`);
console.log(`   • Zeitraum: ${new Date(data.daylist.elements[0].date).toLocaleDateString('de-DE')} bis ${new Date(data.daylist.elements[data.daylist.elements.length - 1].date).toLocaleDateString('de-DE')}`);

// Speichere in neue Datei
console.log('\n💾 Speichere in neue Datei...');
try {
  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Erfolgreich gespeichert in: ${outputFile}`);
} catch (error) {
  console.error('❌ Fehler beim Speichern:', error.message);
  process.exit(1);
}

console.log('\n✨ Fertig!');
