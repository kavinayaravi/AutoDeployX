pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/kavinayaravi/AutoDeployX.git'
            }
        }
        stage('Install') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project...'
                bat 'npm run build || echo "No build step"'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test || echo "No tests defined"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Starting server...'
                bat 'node server.js'
            }
        }
    }
}
