#!/bin/bash
# Define variables
IMAGE_NAME="frontend"
IMAGE_TAG="dev"
CONTAINER_NAME="dev_courses_frontend"
PORT="8080"

# Function to display available commands
show_help() {
    echo "Available commands:"
    echo "  build       - Build the Docker image"
    echo "  start       - Start the Docker container"
    echo "  dev         - Start a dev webserver"
    echo "  app_ip      - Display application access URL"
    echo "  down        - Stop and remove the Docker container"
    echo "  ip          - Show the container's internal IP address"
    echo "  shell       - Access the container's shell"
    echo "  fresh_dev - starts a dev server and builds a fresh image and also removes the old container and replaces it with a new one"
}

# Function to build the Docker image
build_image() {
    echo "Building the Docker image..."
    sudo docker build . -t $IMAGE_NAME:$IMAGE_TAG
    if [ $? -eq 0 ]; then
        echo "Docker image built successfully."
    else
        echo "Docker build failed."
        exit 1
    fi
}

# Function to start the Docker container
start_container() {
    echo
    echo "STEP: STARTING DOCKER CONTAINER"
    echo "-----------------------------"
    echo
    sudo docker run -d -p $PORT:$PORT --name $CONTAINER_NAME $IMAGE_NAME:$IMAGE_TAG
    if [ $? -eq 0 ]; then
        echo "Container started successfully."
    else
        echo "Failed to start the container."
        exit 1
    fi
}

# Function to display application access URL
show_app_url() {
    IP=$(sudo docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $CONTAINER_NAME)
    if [ -z "$IP" ]; then
        echo
        echo "CONTAINER IS NOT RUNNING"
        echo
    else
        echo
        echo "Access the application with prod build at http://$IP:$PORT"
        echo 
    fi
}

# Command: Stop and remove the container
down_container() {
    echo
    echo "STEP: STOPPING AND REMOVING THE CONTAINER..."
    echo "-----------------------------"
    echo
    sudo docker stop $CONTAINER_NAME 2>/dev/null
    sudo docker rm $CONTAINER_NAME 2>/dev/null
    echo "Container stopped and removed."
    echo
}

# Command: Access the container shell
access_shell() {
    echo
    echo "STEP: ACCESS CONTAINER SHELL WITH COMMAND: $0"
    echo "-----------------------------"
    echo
    if [ "$(sudo docker ps -q -f name=$CONTAINER_NAME)" ]; then
        echo "Accessing the container shell..."
        sudo docker exec -it $CONTAINER_NAME "$@"
    else
        echo "Container is not running. Please start the container first."
    fi
    echo
}

dev () {
    echo
    echo "STEP: STARTING FRONTEND IN DEV MODE"
    echo "-----------------------------"
    echo
    sudo docker exec -it $CONTAINER_NAME yarn dev --host
    echo
}


# Parse the argument and call the appropriate function
case $1 in
    build)
        build_image
        ;;
    start)
        start_container
        show_app_url
        ;;
    app_ip)
        show_app_url
        ;;
    down)
        down_container
        ;;
    shell)
        shift
        access_shell "$@"
        ;;
    dev)
        show_app_url
        dev
        ;;
    fresh_dev)
        down_container
        build_image
        start_container
        show_app_url
        dev
        ;;
    *)
        show_help
        exit 1
        ;;
esac