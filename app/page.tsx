function PixelHeart() {
  return (
    <div className="flex justify-center my-4">
      <div className="grid grid-cols-7 gap-[2px]">
        {[
          0,1,1,0,1,1,0,
          1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,
          0,1,1,1,1,1,0,
          0,0,1,1,1,0,0,
          0,0,0,1,0,0,0,
        ].map((p, i) => (
          <div
            key={i}
            className={`w-3 h-3 ${
              p ? "bg-pink-500" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const fotos = [
    "/fotos/foto1.jpeg",
    "/fotos/foto2.jpeg",
    "/fotos/foto3.jpeg",
    "/fotos/foto4.jpeg",
    "/fotos/foto5.jpeg",
    "/fotos/foto6.jpeg",
    "/fotos/foto7.jpeg",
    "/fotos/foto8.jpeg",
    "/fotos/foto9.jpeg",
    "/fotos/foto10.jpeg",
    "/fotos/foto11.jpeg",
    "/fotos/foto12.jpeg",
    "/fotos/foto13.jpeg",
    "/fotos/foto14.jpeg",
  ]

  return (
    <main className="min-h-screen bg-black text-white p-4">
      
      {/* MENSAJE */}
      <section className="mb-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">
          Para ti, Karlita hermosa ❤️
        </h1>

        {/* CORAZÓN PIXEL ART */}
        <PixelHeart />

        <p className="text-sm opacity-80 max-w-md mx-auto">
          Eres todo para mí, gracias por todos estos momentos.
        </p>
      </section>

      {/* GALERÍA */}
      <section className="grid grid-cols-2 gap-3">
        {fotos.map((foto, i) => (
          <div
            key={i}
            className="bg-black rounded-lg overflow-hidden"
          >
            <img
              src={foto}
              alt={`foto-${i}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </section>

    </main>
  )
}
