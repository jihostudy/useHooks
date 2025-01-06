export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    plugins: ["react", "react-hooks"],
    rules: {
      // React 훅 규칙 준수
      "react-hooks/rules-of-hooks": "error",
      // useEffect 의존성 배열 검사
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지
      },
    },
  },
];
