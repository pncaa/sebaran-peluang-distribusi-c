function klik() {
    clear()
    path();
    angka();
   
    rumus()
}

function validateInput(x, y) {
    if (isNaN(x) || isNaN(y) || x < 1 || x > 100 || y < 1 || y > 100) {
        alert("Please enter values between 1 and 100");

        return false;
    }
    if (isNaN(x) || isNaN(y) || y <= x) {
        alert("INPUTAN PERTAMA TIDAK BOLEH LEBIH BESAR ATAU SAMA");
        return false;

    }
    return true;
}

function clear() {
    let svg = document.getElementById('svg');
    let texts = svg.querySelectorAll('text');
    let lines = svg.querySelectorAll('line');
    let paths = svg.querySelectorAll('path');

    texts.forEach(text => svg.removeChild(text));
    lines.forEach(line => svg.removeChild(line));
    paths.forEach(path => svg.removeChild(path));
}



function path() {
    let x = parseFloat(document.getElementById('m1').value);
    let y = parseFloat(document.getElementById('m2').value);
    if (!validateInput(x, y)) {
        return; // Jika input tidak valid, hentikan eksekusi fungsi angka
    }

    let svg = document.getElementById('svg');
    //garis lengkung
    const lengkung = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    lengkung.setAttribute('d', 'M140.5 118C254.5 478.5 688.5 449.5 907.5 449.5');
    lengkung.setAttribute('stroke', '#00D1FF');
    lengkung.setAttribute('stroke-width', '3');
    svg.appendChild(lengkung);

    // Garis pertama
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '139.5');
    line1.setAttribute('y1', '90');
    line1.setAttribute('x2', '139.5');
    line1.setAttribute('y2', '460');
    line1.setAttribute('stroke', 'black');
    line1.setAttribute('stroke-width', '3');
    svg.appendChild(line1);

    // Garis kedua
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '139');
    line2.setAttribute('y1', '458.5');
    line2.setAttribute('x2', '909');
    line2.setAttribute('y2', '458.5');
    line2.setAttribute('stroke', 'black');
    line2.setAttribute('stroke-width', '3');
    svg.appendChild(line2);
    garis1()
    // Garis-garis lainnya
    for (let i = 119.5; i <= 289.5; i += 170) {
        const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', '130');
        newLine.setAttribute('y1', i);
        newLine.setAttribute('x2', '138');
        newLine.setAttribute('y2', i);
        newLine.setAttribute('stroke', 'black');
        svg.appendChild(newLine);
    }

    for (let i = 176.5; i <= 898.5; i += 38) {
        const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', i);
        newLine.setAttribute('y1', '460');
        newLine.setAttribute('x2', i);
        newLine.setAttribute('y2', '468');
        newLine.setAttribute('stroke', 'black');
        svg.appendChild(newLine);
        console.log(i)
    }
}

function angka() {
    let x = parseFloat(document.getElementById('m1').value);
    let y = parseFloat(document.getElementById('m2').value);
    if (!validateInput(x, y)) {
        return; // Jika input tidak valid, hentikan eksekusi fungsi angka
    }

    let urutan = [];
    let baca = 0

    // Mengisi nilai lebih dari 5
    if (x >= 1 && x <= 5) {
        let range = (y - x) / 15;
        for (let i = 0; i <= 19; i++) {
            let q = x + i * range
            urutan.push(q.toFixed(0));
        }
    } else {
        let range = (y - x) / 10;
        let xy = x - range * 5
        if (xy <= 0) {
            for (let i = 1; i <= 5; i++) {
                urutan.push(i);
            }
        } else {
            for (let i = 0; i < 5; i++) {
                let q = xy + i * range
                urutan.push(q.toFixed(0));
            }
        }

        for (let i = 0; i <= 19; i++) {
            let q = x + i * range
            urutan.push(q.toFixed(0));
        }
    }

    for (let i = 170; i <= 892; i += 38) {
        const newText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        newText.setAttribute('x', i);
        newText.setAttribute('y', '490');
        newText.setAttribute('font-family', 'Inter');
        newText.setAttribute('font-size', '18');
        newText.setAttribute('font-style', 'normal');
        newText.setAttribute('fill', 'black');
        newText.textContent = `${urutan[baca]}`;
        svg.appendChild(newText);
        baca++;
    }


}

function garis1() {
    // Ambil nilai dari input m1 dan m2
    let x = parseFloat(document.getElementById('m1').value);
    let y = parseFloat(document.getElementById('m2').value);
    let x1;
    let x2 = 746.5;

    // Validasi input
    if (!validateInput(x, y)) {
        return;
    }

    // Tentukan nilai x1 berdasarkan kondisi x
    if (x <= 5) {
        x1 = 176.5;
    } else {
        x1 = 366.5;
    }

    // Ambil elemen SVG
    let svg = document.getElementById('svg');

    // Buat garis pertama
    let line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', x1);
    line1.setAttribute('y1', '90');
    line1.setAttribute('x2', x1);
    line1.setAttribute('y2', '460');
    line1.setAttribute('stroke', 'red');
    line1.setAttribute('stroke-width', '1');
    line1.setAttribute('stroke-dasharray', '2 4');
    svg.appendChild(line1);

    // Buat garis kedua
    let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', x2);
    line2.setAttribute('y1', '90');
    line2.setAttribute('x2', x2);
    line2.setAttribute('y2', '460');
    line2.setAttribute('stroke', 'blue');
    line2.setAttribute('stroke-width', '1');
    line2.setAttribute('stroke-dasharray', '2 4');
    svg.appendChild(line2);
}

function rumus() {
    let x = document.getElementById('m1').value;
    let y = document.getElementById('m2').value;
    let z = document.getElementById('mean').value;


    x = parseFloat(x);
    y = parseFloat(y);
    z = parseFloat(z);
    if (!validateInput(x, y)) {
        return; // Jika input tidak valid, hentikan eksekusi fungsi angka
    }

    let pangkat1 = -x * z;
    let pangkat2 = -y * z;

    let hasil1 = 1 - Math.pow(Math.E, pangkat1);
    let hasil2 = Math.pow(Math.E, pangkat2);
    let hasil3 = Math.pow(Math.E, pangkat1) - Math.pow(Math.E, pangkat2);

//menampilkan jawaban dalam tampilan
    let div = document.getElementById('bc');
    div.innerHTML = ""; // Clear previous results

    let h3Baru1 = document.createElement('h3');
    h3Baru1.textContent = `Hasil 1: ${hasil1.toFixed(4)}`;
    div.appendChild(h3Baru1);

    let h3Baru2 = document.createElement('h3');
    h3Baru2.textContent = `Hasil 2: ${hasil2.toFixed(4)}`;
    div.appendChild(h3Baru2);

    let h3Baru3 = document.createElement('h3');
    h3Baru3.textContent = `Hasil 3: ${hasil3.toFixed(4)}`;
    div.appendChild(h3Baru3);
}