import { useState, useEffect } from "react";

function Clock() {
  // useState: menyimpan waktu saat ini
  const [time, setTime] = useState(new Date());

  // useEffect: menjalankan interval setelah komponen dirender
  useEffect(() => {
    // setInterval: perbarui waktu setiap 1 detik
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // clearInterval: cleanup saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <span className="clock-date">
        {time.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
      <span className="clock-time">
        {time.toLocaleTimeString("id-ID", { hour12: false })}
      </span>
    </div>
  );
}

export default Clock;
