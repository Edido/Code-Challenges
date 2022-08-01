// language: jenkinsfile
node {
  try {
    stage('SCM') {
      checkout scm
    }
    stage ('prepare') {
      bat "yarn";
    }
    stage('coverage') {
      bat "yarn coverage";
    }
    stage('SonarQube Analysis') {
      def scannerHome = tool 'sonarqube-scanner';
      withSonarQubeEnv() {
        // sh "${scannerHome}/bin/sonar-scanner"
        bat "${scannerHome}/bin/sonar-scanner";
      }
    }
  } catch (e) {
    echo 'Error: ${e.message}';
    mail bcc: '', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: 'esuarez@outlook.com', mimeType: 'text/html', replyTo: 'esuarez@outlook.com', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "esuarez@outlook.com";  
  } 
}
