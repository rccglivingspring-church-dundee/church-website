"use client";
export default function CloudBackground() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/videos/clouds.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.80)",
          zIndex: -1,
        }}
      />
    </>
  );
}
