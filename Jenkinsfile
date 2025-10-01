pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/kavinayaravi/AutoDeployX.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Example: For Python
                // sh 'python script.py'
                // Example: For Node
                // sh 'npm install && npm test'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands here later
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
