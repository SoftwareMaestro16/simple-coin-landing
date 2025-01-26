import styles from './ContractField.module.scss';

function ContractFiled() {
    const handleCopy = () => {
        const valueToCopy = 'EQB9QBqniFI0jOmw3PU6v1v4LU3Sivm9yPXDDB9Qf7cXTDft';
        navigator.clipboard.writeText(valueToCopy)
    };

    return (
        <div className={styles.smcFieldContainer}>
            <h1>Smart Contract Address</h1>
            <div className={styles.container}>
                <input 
                    className={styles.field} 
                    type="text" 
                    disabled 
                    readOnly 
                    value='EQB9QBqniFI0jOmw3PU6v1v4LU3Sivm9yPXDDB9Qf7cXTDft' 
                />
                <button onClick={handleCopy}>
                    <img src="/copy.png" alt="Copy" />
                </button>
            </div>
        </div>
    );
}

export default ContractFiled