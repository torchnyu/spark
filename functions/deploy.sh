zip -r function.zip .
aws lambda update-function-code --function-name SendSparkEmail  --zip-file fileb://function.zip 
