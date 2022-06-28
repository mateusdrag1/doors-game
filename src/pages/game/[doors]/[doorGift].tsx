import styles from '../../../styles/Game.module.css';

import { useEffect, useState } from 'react';
import Door from '../../../components/Door';
import { createDoors, updateDoors } from '../../../functions/doors';
import DoorModel from '../../../model/door';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Game() {
  const router = useRouter();

  const [validated, setValidated] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const { doors, doorGift } = router.query;

    const doorsValid = +doors >= 3 && +doors <= 100;
    const doorGiftValid = +doorGift >= 1 && +doorGift <= +doors;

    setValidated(doorsValid && doorGiftValid);
  }, [doors, router?.query]);

  useEffect(() => {
    const { doors, doorGift } = router.query;

    if (doors && doorGift) {
      setDoors(createDoors(+doors, +doorGift));
    }
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door, index) => {
      return (
        <Door
          key={index}
          value={door}
          onChange={(newDoor: DoorModel) =>
            setDoors(updateDoors(doors, newDoor))
          }
        />
      );
    });
  }

  return (
    <>
      <Head>
        <title>Gaming - Doors</title>
      </Head>
      <div className={styles.game}>
        <div className={styles.doors}>
          {validated ? (
            renderDoors()
          ) : (
            <h2>
              The numbers of Doors is invalid or the number of gift door is
              invalid. Please check and try again.
            </h2>
          )}
        </div>
        <div className={styles.buttons}>
          <Link href={'/'}>
            <button>Go to home</button>
          </Link>
        </div>
      </div>
    </>
  );
}
