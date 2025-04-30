const Settings = {
    theme: "light",
    language: "en",
  
    changeTheme(newTheme) {
      this.theme = newTheme;
    },
  
    changeLanguage(newLang) {
      this.language = newLang;
    }
  };
  
  // Anywhere in your app:
  Settings.changeTheme("dark");
  Settings.changeLanguage("fr");
  
  console.log(Settings.theme);     // dark
  console.log(Settings.language);  // fr
  