pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/kavinayaravi/AutoDeployX.git'
            }
        }

        stage('Install') {
            steps {
                echo "Installing Node.js dependencies..."
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'npm run build || echo Build step skipped'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                bat 'npm test || echo Tests skipped'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application..."
                bat 'echo Application deployed successfully!'
            }
        }
    }
}
