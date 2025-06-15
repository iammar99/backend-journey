# Class 4 <!-- omit in toc -->



# Table of Contents

- [Table of Contents](#table-of-contents)
  - [NPM Understanding](#npm-understanding)
  - [Installing and unistalling packages](#installing-and-unistalling-packages)
    - [Installing a specific version of a package](#installing-a-specific-version-of-a-package)
    - [Uninstalling a package](#uninstalling-a-package)
  - [Understanding NodeModules](#understanding-nodemodules)
  - [Dependencies VS DevDependencies](#dependencies-vs-devdependencies)
    - [Dependencies](#dependencies)
    - [DevDependencies](#devdependencies)
  - [Scripts](#scripts)
- [Link For the Video](#link-for-the-video)


## NPM Understanding 

NPM stand for node package manager. It is like play store or app store in IOS devices . It is used to install packages in our project. 

## Installing and unistalling packages

We can install packages using npm install command.

```
npm install [packageName]
```
OR

```
npm i [packageName]
```

### Installing a specific version of a package

We can install a specific version of a package using npm install command with version number.

```
npm install [packageName]@[versionNumber]
```

OR

```
npm i [packageName]@[versionNumber]
```
### Uninstalling a package

We can uninstall a package using npm uninstall command.

```
npm uninstall [packageName]
```

## Understanding NodeModules 

NodeModules is a folder in our project where all the packages are stored. We can see all the packages installed in our project in this folder. It also contain other packages which we dont installed but our intsalled packages depend on them. 

## Dependencies VS DevDependencies

### Dependencies

These are packages that we install in our project. These packages are required to run our project.

### DevDependencies

These are project which are used only during development. These packages are not required to run our project. We can install these packages for our own ease.

## Scripts

These are used to run commands . We have predefined scripts in our package.json file ike start and test . We can also add our own scripts in this file. Which we can run using these commands.


```
npm run [scriptName]
```

# Link For the Video 

[Class 3](https://www.youtube.com/watch?v=3CkgSQWwNlk&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH)