from flask import Flask, render_template, jsonify, request
import json
import os

app = Flask(__name__)

MATERIAS_FILE = 'materias.json'

def leer_materias():
    if not os.path.exists(MATERIAS_FILE):
        return []
    with open(MATERIAS_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def guardar_materias(materias):
    with open(MATERIAS_FILE, 'w', encoding='utf-8') as f:
        json.dump(materias, f, ensure_ascii=False, indent=4)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/materias', methods=['GET'])
def get_materias():
    materias = leer_materias()
    return jsonify(materias)

@app.route('/api/materias/<codigo>', methods=['PUT'])
def actualizar_materia(codigo):
    materias = leer_materias()
    data = request.get_json()
    for materia in materias:
        if materia['codigo'] == codigo:
            materia['vista'] = data.get('vista', materia['vista'])
            break
    guardar_materias(materias)
    return jsonify({'success': True})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port) 