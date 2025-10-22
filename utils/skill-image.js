import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import cypress from '../app/assets/svg/skills/Cypress.svg';
import jest from '../app/assets/svg/skills/Jest.svg';
import jira from '../app/assets/svg/skills/Jira.svg';
import mssql from '../app/assets/svg/skills/mssql.svg';
import nest from '../app/assets/svg/skills/nest.svg';
import node from '../app/assets/svg/skills/node.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import git from '../app/assets/svg/skills/git.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';

import pandas from '../app/assets/svg/skills/pandas.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg'
import fastapi from '../app/assets/svg/skills/fastapi.svg'
import redis from '../app/assets/svg/skills/Redis.svg'


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'node':
      return node;
    case 'nest':
      return nest;
    case 'cypress':
      return cypress;
    case 'jest':
      return jest;
    case 'jira':
      return jira;
    case 'mssql':
      return mssql;
    case "redis":
      return redis;
    case 'docker':
      return docker;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'kotlin':
      return kotlin;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'numpy':
      return numpy;
    case 'azure':
      return azure;
    case 'flutter':
      return flutter;
    case 'pandas':
      return pandas;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'fastapi':
      return fastapi;
    default:
      break;
  }
}
