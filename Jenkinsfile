pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }
     
    stage('Run tests') {
      steps {
         sh 'npm run test:unit'
         sh 'npm run test:integration'
      }
    }
  }
}