import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const outputRef = useRef(null);

  // Scroll to the bottom when output is updated
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newOutput = [...output, `Enter_The_Command_To_Know_About_Me> ${input}`];

    try {
      if (input === 'help') {
        const response = await axios.get('http://localhost:5000/api/terminal/commands');
        newOutput.push(response.data.help);
      } else if (input === 'aboutme') {
        const response = await axios.get('http://localhost:5000/api/terminal/aboutme');
        newOutput.push("About me:",response.data);
      } else if (input === 'skills') {
        const response = await axios.get('http://localhost:5000/api/terminal/skills');
        newOutput.push('My Skills:', ...response.data);
      } else if (input === 'experience') {
        const response = await axios.get('http://localhost:5000/api/terminal/experience');
        response.data.forEach((exp) => {
          // newOutput.push(`${exp.role} at ${exp.company} (${exp.duration}):`, ...exp.details);
          newOutput.push(`${exp.role} at ${exp.company} (${exp.duration}):`);
        });

      } else if (input === 'education') {
        const response = await axios.get('http://localhost:5000/api/terminal/education');
        response.data.forEach((edu) => {
          newOutput.push(`${edu.degree} - ${edu.institution} (${edu.duration}, Score: ${edu.score})`);
        });
      } else if (input === 'achievements') {
        const response = await axios.get('http://localhost:5000/api/terminal/achievements');
        newOutput.push('Achievements:', ...response.data);
      } else if (input === 'projects') {
        const response = await axios.get('http://localhost:5000/api/terminal/projects');
        response.data.forEach((proj) => {
          newOutput.push(`${proj.title} (${proj.domain}, ${proj.duration}):`, ...proj.details);
        });
      } else if (input === 'certifications') {
        const response = await axios.get('http://localhost:5000/api/terminal/certifications');
        newOutput.push('Certifications:', ...response.data);
      } else if (input === 'contact') {
        const response = await axios.get('http://localhost:5000/api/terminal/contact');
        newOutput.push(`Email: ${response.data.email}`);
        newOutput.push(`Phone: ${response.data.phone}`);
        newOutput.push(`LinkedIn: ${response.data.linkedin}`);
        newOutput.push(`GitHub: ${response.data.github}`);
      } else if (input === 'clear') {
        setOutput([]);
        setInput('');
        return;
      } else {
        newOutput.push('Invalid command. Type "help" for a list of commands.');
      }
    } catch (err) {
      newOutput.push('Error executing command.');
    }

    setOutput(newOutput);
    setInput('');
  };

  return (
    <div style={styles.terminal}>
      <div ref={outputRef} style={styles.output}>
        <div style={styles.name}>
          <span>Welcome to My Portfolio Terminal</span>
        </div>
        <div>
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleCommand} style={styles.form}>
          <span style={{ marginRight: '5px' }}>Enter_The_Command_To_Know_About_Me&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

const styles = {
  terminal: {
    backgroundColor: 'black',
    color: 'lime',
    fontFamily: `'Courier New', monospace`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  output: {
    flex: 1,
    width: '100%',
    overflowY: 'auto',
    padding: '20px 10px 0',
    boxSizing: 'border-box',
    marginBottom: '20px',
  },
  name: {
    textAlign: 'center',
    color: '#00FF41',
    fontSize: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '20px',
    fontFamily: `'Press Start 2P', monospace`,
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  },
  input: {
    backgroundColor: 'black',
    color: 'lime',
    border: 'none',
    outline: 'none',
    fontFamily: `'Courier New', monospace`,
    width: '100%',
    padding: '5px',
    fontSize: '16px',
  },
};

export default Terminal;
