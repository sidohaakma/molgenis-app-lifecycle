pipeline {
  agent any

  parameters {
    string(name: 'GIT_TAG', defaultValue: 'undefined')
  }

  environment {
    APP_NAME = "molgenis-app-lifecycle"
    APP_VERSION = "${params.GIT_TAG}"
  }
  stages {
    stage('Preparation') {
      steps {
        // Clean workspace
        step([$class: 'WsCleanup', cleanWhenFailure: false])
        // Get code from github.com
        checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: 'ref/tags/${APP_VERSION}']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'shaakma', url: 'http://github.com/molgenis/molgenis-app-lifecycle.git']]]
      }
    }
    stage('Build UI-component') {
      steps {
        echo "Build the MOLGENIS Vue forms"
        sh "yarn install"
        sh "yarn build"
      }
    }
    stage('Test UI-component') {
      steps {
        echo "Build VUE-forms"
        sh "yarn test"
      }
    }
    stage('Publish App to appstore.molgenis.org') {
      steps {
        echo "Publish App to appstore.molgenis.org"

      }
    }
  }
  // post {
  //  success {
  //    notifySuccess()
  //  }
  //  failure {
  //    notifyFailed()
  //  }
  // }
}

def notifySuccess() {
  slackSend (channel: '#releases', color: '#00FF00', message: "SUCCESSFUL: Job - <${env.BUILD_URL}|${env.JOB_NAME}> | #${env.BUILD_NUMBER}")
}
def notifyFailed() {
  slackSend (channel: '#releases', color: '#FF0000', message: "FAILED: Job - <${env.BUILD_URL}|${env.JOB_NAME}> | #${env.BUILD_NUMBER}")
}