function setLevel(level) {
  if (level.toUpperCase() == "SILENT") console.log("Log level set to Silent");
  else if (level.toUpperCase() == "ERROR") console.log("Log level set to Error");
  else if (level.toUpperCase() == "WARN") console.log("Log level set to Warn");
  else if (level.toUpperCase() == "INFO") console.log("Log level set to Info");
  else if (level.toUpperCase() == "DEBUG") console.log("Log level set to Debug");
  else console.log("Log level set to Info");
}

module.exports = setLevel;