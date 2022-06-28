import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Card from '../components/Card';
import NumberInput from '../components/NumberInput';
import styles from '../styles/Start.module.css';

export default function Start() {
  const [doorsLength, setDoorsLength] = useState(3);
  const [doorGift, setDoorGift] = useState(1);

  return (
    <>
      <Head>
        <title>Monty Hall - Game</title>
      </Head>
      <div className={styles.start}>
        <div>
          <Card bgColor='#c0392c'>
            <h1>Monty Hall</h1>
          </Card>
          <Card>
            <NumberInput
              text='Number of doors'
              value={doorsLength}
              onChange={newValue => setDoorsLength(newValue)}
            />
          </Card>
        </div>

        <div>
          <Card>
            <NumberInput
              text='Gift door'
              value={doorGift}
              onChange={newValue => setDoorGift(newValue)}
            />
          </Card>
          <Card bgColor='#28a085'>
            <Link href={`/game/${doorsLength}/${doorGift}`} passHref>
              <h2 className={styles.link}>Start</h2>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}
