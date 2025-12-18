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
        <p className="text-sm opacity-80 max-w-md mx-auto">
          Eres todo para mi, gracias por todos estos momentos.
        </p>
      </section>

      {/* GALERÍA */}
      <section className="grid grid-cols-2 gap-2">
        {fotos.map((foto, i) => (
          <img
            key={i}
            src={foto}
            alt={`foto-${i}`}
            className="rounded-lg object-cover w-full h-40"
          />
        ))}
      </section>

    </main>
  )
}
