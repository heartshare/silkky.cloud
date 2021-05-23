set -e

echo "Starting test"
sleep 10

# Test
# confirm app has started
LOOKUP=$(curl -s -o /dev/null -D - 0.0.0.0:8080 | grep "HTTP/1.1 200 OK") 
if [ -z "$LOOKUP" ] ; then
    echo "ERROR : container test failed to return 200"
    exit 1
fi
echo "container test passed"