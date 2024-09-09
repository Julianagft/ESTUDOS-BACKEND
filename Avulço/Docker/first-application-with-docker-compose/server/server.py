# Import of python system libraries.
# These libraries will be used to create the web server.

import http.server
import socketserver

# This variable is going to handle the requests of our client on the server.
handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", 1234), handler) as httpd:
    # This instruction will keep the server running, waiting for requests from the client.
    httpd.serve_forever()