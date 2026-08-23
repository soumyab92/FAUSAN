const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const ROOT_DIR = path.resolve(__dirname, '..');

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    if (pathname === '/' || pathname === '') {
        pathname = '/index.html';
    }

    let filePath = path.join(ROOT_DIR, pathname);

    // If directory, try index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`<h1>404 Not Found</h1><p>File ${pathname} not found on server.</p>`);
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`500 Internal Server Error: ${err.message}`);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*'
            });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`✨ FAUSAN Server running at http://localhost:${PORT}/`);
});
