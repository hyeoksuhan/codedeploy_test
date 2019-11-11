sleep 3

result=$(curl -s http://localhost:3000/rest/test/)
 
if [[ $result =~ "test" ]]; then
    exit 0
else
    exit 1
fi

