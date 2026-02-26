const fs = require('fs');
const path = require('path');

// Pfade definieren
const backupFile = path.join(__dirname, 'data', 'backup.json');
const outputFile = path.join(__dirname, 'data', 'backup_cleaned.json');
const logFile = path.join(__dirname, 'cleanup-log.txt');

// Konfiguration: Setze hier dein Mindest-Jahr
const MIN_YEAR = 2026; // Nur Einträge ab 2026 behalten

// Berechne Timestamp für 1. Januar des MIN_YEAR (00:00:00 UTC)
const minDate = new Date(`${MIN_YEAR}-01-01T00:00:00Z`).getTime();

// Logging-Funktion
function log(message) {
  console.log(message);
  fs.appendFileSync(logFile, message + '\n', 'utf-8');
}

// Log-Datei leeren
fs.writeFileSync(logFile, '', 'utf-8');

// Datei einlesen
log('📖 Lese backup.json...');
let data;

try {
  const fileContent = fs.readFileSync(backupFile, 'utf-8');
  data = JSON.parse(fileContent);
} catch (error) {
  log('❌ Fehler beim Lesen der Datei:', error.message);
  process.exit(1);
}

// Überprüfen ob daylist existiert
if (!data.daylist || !data.daylist.elements) {
  log('❌ Fehler: daylist.elements nicht gefunden!');
  process.exit(1);
}

log(`📊 Gefunden: ${data.daylist.elements.length} Einträge in daylist.elements`);

// Zähle auch Einträge ohne Termine
const emptyEntries = data.daylist.elements.filter(item => !item.appointments || item.appointments.length === 0);
const entriesWithAppointments = data.daylist.elements.filter(item => item.appointments && item.appointments.length > 0);
const totalAppointments = data.daylist.elements.reduce((sum, item) => sum + (item.appointments ? item.appointments.length : 0), 0);

log(`   • Tage MIT Terminen: ${entriesWithAppointments.length}`);
log(`   • Leere Tage (kein appointments): ${emptyEntries.length}`);
log(`   • GESAMT Termine: ${totalAppointments}`);
log(`   • Ø Termine pro Tag: ${(totalAppointments / entriesWithAppointments.length).toFixed(1)}`);

// daylist.elements chronologisch sortieren (nach 'date' Feld)
log('🔄 Sortiere Tage chronologisch...');
data.daylist.elements.sort((a, b) => {
  const dateA = a.date || 0;
  const dateB = b.date || 0;
  return dateA - dateB;
});

// Entferne leere Einträge (Objekte ohne 'appointments' oder 'date')
log('🧹 Entferne leere Einträge...');
const beforeCount = data.daylist.elements.length;
data.daylist.elements = data.daylist.elements.filter(item => item.date && item.appointments);
const afterCount = data.daylist.elements.length;
const removedCount = beforeCount - afterCount;

if (removedCount > 0) {
  log(`   ➜ ${removedCount} leere Einträge entfernt`);
}

// Filtere Einträge nach Mindest-Jahr
log(`\n🗓️  Filtere Einträge vor ${MIN_YEAR}...`);
const beforeFilter = data.daylist.elements.length;
data.daylist.elements = data.daylist.elements.filter(item => {
  return item.date >= minDate;
});
const afterFilter = data.daylist.elements.length;
const removedOldEntries = beforeFilter - afterFilter;

if (removedOldEntries > 0) {
  log(`   ➜ ${removedOldEntries} Einträge vor 01.01.${MIN_YEAR} gelöscht`);
}

// Statistik anzeigen
log('\n📈 Statistik:');
log(`   • Gesamte Einträge nach Bereinigung: ${data.daylist.elements.length}`);
if (data.daylist.elements.length > 0) {
  log(`   • Zeitraum: ${new Date(data.daylist.elements[0].date).toLocaleDateString('de-DE')} bis ${new Date(data.daylist.elements[data.daylist.elements.length - 1].date).toLocaleDateString('de-DE')}`);
}

// Speichere in neue Datei
log('\n💾 Speichere in neue Datei...');
try {
  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), 'utf-8');
  log(`✅ Erfolgreich gespeichert in: ${outputFile}`);
} catch (error) {
  log('❌ Fehler beim Speichern: ' + error.message);
  process.exit(1);
}

log('\n✨ Fertig!');
