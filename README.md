
# Install

First install dependencies:

npm v10.8.3  
node v22.9.0  
react, reactDOM  
esBuild  
[golang v1.23.2](https://go.dev/dl/)  
[mySQL](https://dev.mysql.com/downloads/mysql/)

## Using MacOS 14.3

Use your preferred package manager to install npm:

```
brew install node
```

verify installation:

node
```
node
```

npm
```
npm
```

mysql
```
/usr/local/mysql/bin/mysql
```
go
```
go version
```

Create package.json:
```
npm init -y
```

Install React:
```
npm install react react-dom
```

Install esBuild:

```
npm install --save-exact --save-dev esbuild
```

Create go.mod file:
```
go mod init <MODULE_NAME>
```

Install go dependencies:

```
go install github.com/gofiber/fiber/v2@latest
```

```
go get -u github.com/gofiber/template/html/v2
```

```
go get "github.com/go-sql-driver/mysql"
```

# Build

This build script will bundle any react files into static assets

```
npm run dev
```

Next run main.go:

```
go run .
```
