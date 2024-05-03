module.exports = {
  "root": true,
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all"],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "react-native/react-native": true
  },
  "plugins": ["react", "react-native"],
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "react-native/no-raw-text": "off"
  }
}
