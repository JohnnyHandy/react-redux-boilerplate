# Environment Variables

## Intro

* Environment variables are variables  that are available through the global ```proccess.env``` object.
* They are useful for the assignment of values that are usually immutable through the whole application, as well as sensitive data like API keys, passcodes, and etc.
### Protecting environemnt variables content 
* Since it may contain sensitive data, it is a good practice to always insert the ```.env``` files inside the ```.gitignore``` files so any changes on these ```.env``` files won't be detected by ```git``` and won't be part of the ```git``` repo
### Assigning environment vvvaraiables
* To assign values to and environment variable in a React Application, it is used files with the ```.env``` preffix, in which the asssignment follows this simple syntax:
   ```
  MY_ENV_VARIABLE = hello world
  ```
### Accessing environment values
* To access the environment variables in a React application, bydefault it should be used the preffix ```REACT_APP_``` before the variable name. For example, to access the variable from the example above, it should be used ```proccess.env.REACT_APP_MY_ENV_VARIABLE```.


## Types of .env files

* Some projects use more than a simple ```.env``` file, using instead different ```.env``` files to different stages of the development chain, like ```env.dev, env.staging, env.prod```, among others.

* In some cases, it is useful to create samples or templates of ```.env``` files, in order to place variables leaving them blank. With this, these samples files can be uploaded to the desired repository and every collaborator that want to work in such a project will already have an access to the ```.env``` samples. As an example, an project can have a ```.env.sample``` file with following content:
  ```
  MY_API_KEY=
  MY_ACCESS_KEY=
  ```
  This file does not have sensitive content, since it has its variables empty; thus it does not need to be ignored by ```.gitignore```
 and can be uploaded to the repo. As soon as it is downloaded, it can be copied and pasted in the same folder (to not delete the sample version) and than the copy should have its ```.sample``` suffix removed. A command that can be used to simplify this process is: 
   ```
    cp -pRfv .env.sample .env
   ```
   Thus we gonna have our sample file, and also a no sample one which can have the values assigned properly without being detected by ```.gitignore```.

