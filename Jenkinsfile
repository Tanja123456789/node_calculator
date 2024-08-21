pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
   stage('Cloning Git') {
      steps {
        git 'git@github.com:Tanja123456789/node_calculator.git'
      }
    }
    
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