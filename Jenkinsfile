pipeline {
    agent any

    stages {
        stage('Saludo a usuario') {
            steps {
                sh 'echo "Saludando desde pipeline"'
            }
        }

        stage('Proceso de build y test') {
            agent {
                docker {
                    image 'node:22'
                }
            }
            steps {
                sh 'echo "Usando contenedor node:22 para ejecutar comandos"'
                sh 'npm ci'
            }
        }
    }
}
