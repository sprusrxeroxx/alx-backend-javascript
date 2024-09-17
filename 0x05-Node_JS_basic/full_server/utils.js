import fs from 'fs';

const readDatabase = (file_path) => new Promise((resolve, reject) => {
    if (!file_path) {
        reject(new Error('Cannot load the database'));
    }

    if (file_path) {
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            }

            if (data) {
                const file_lines = data.toString('utf-8').trim().split('\n');
                const studentGroups = {};
                const dbFieldNames = file_lines[0].split(',');
                const studentPropNames = dbFieldNames
                    .slice(0, dbFieldNames.length - 1);

                for (const line of file_lines.slice(1)) {
                    const studentRecord = line.split(',');
                    const studentPropValues = studentRecord
                        .slice(0, studentRecord.length - 1);
                    const field = studentRecord[studentRecord.length - 1];
                    if (!Object.keys(studentGroups).includes(field)) {
                        studentGroups[field] = [];
                    }
                    const studentEntries = studentPropNames
                        .map((propName, idx) => [propName, studentPropValues[idx]]);
                    studentGroups[field].push(Object.fromEntries(studentEntries));
                }
                resolve(studentGroups);
            }
        });
    }
});

export default readDatabase;
module.exports = readDatabase;