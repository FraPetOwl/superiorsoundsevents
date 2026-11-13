export const CATEGORIES = [
  "All",
  "Audio",
  "Lighting",
  "DJ Gear",
  "Soundboards",
  "Microphones",
  "Truss",
  "Visuals",
  "Add-Ons",
  "Accessories, Cables, Misc"
];

export const INVENTORY = [
  // --- AUDIO ---
  {
    id: "qsc-kw122",
    name: "QSC-KW122",
    category: "Audio",
    price: 100,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FQSC%20KW122_bXIM6?alt=media&token=29ba1c2c-f1bb-4fa0-9b4d-764e0aed2ad3",
    specs: ["1000W Class-D Active 12\" 2-Way Loudspeaker", "75° Axisymmetric Coverage", "DMT & DEEP DSP Processing", "Birch plywood enclosure, rugged tour-grade finish"],
    description: "The gold standard in portable active sound reinforcement. Exceptional clarity and punch for live bands, DJs, and corporate events."
  },
  {
    id: "qsc-k12",
    name: "QSC K12",
    category: "Audio",
    price: 70,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2Fqsck12_2_VoLja?alt=media&token=765137a0-6a9d-441a-83bd-58d0ceaad395",
    specs: ["1000W Continuous Active 12\" PA Speaker", "90° Axisymmetric Dispersion", "Integrated XLR inputs with mic/line switching", "Extremely reliable for main PA or stage monitor use"],
    description: "Legendary powerhouse 12\" active speaker delivering crystalline highs and full, tight bass."
  },
  {
    id: "qsc-kw181",
    name: "QSC KW181",
    category: "Audio",
    price: 100,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FQSC%20KW181_gVJMB?alt=media&token=2a803954-5205-4987-b23a-7f5c659e4fad",
    specs: ["1000W Class-D Active 18\" Subwoofer", "135 dB Peak SPL", "37 Hz to 129 Hz Frequency Range", "Heavy-duty locking casters included"],
    description: "Massive low-end impact. Perfect for dance floors, live concerts, and DJ events needing deep, chest-thumping bass."
  },
  {
    id: "qsc-hpr122",
    name: "QSC HPR122",
    category: "Audio",
    price: 75,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FQSC%20HPR122_OsfUZ?alt=media&token=a0588d3c-1a13-40a9-83f7-8a79a995b762",
    specs: ["500W High-Output Active 12\" 2-Way System", "Birch enclosure for warm acoustic resonance", "Heavy-duty steel grille", "Ideal for stage wedges or front-of-house"],
    description: "Solid, warm wooden cabinet active loudspeaker, preferred by vocalists and live instrumentalists."
  },
  {
    id: "qsc-k10",
    name: "QSC K10",
    category: "Audio",
    price: 70,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FQA-K10_ZtuEA?alt=media&token=1aac5d0d-3440-4394-81bc-5c77b081baca",
    specs: ["1000W Active 10\" 2-Way Loudspeaker", "90° Conical Coverage Angle", "Compact footprint (32 lbs)", "Pristine vocal intelligibility"],
    description: "Compact yet surprisingly powerful 10\" speaker. Excellent for cocktail hours, wedding ceremonies, speaking engagements, and stage monitoring."
  },
  {
    id: "qsc-kw152",
    name: "QSC KW152",
    category: "Audio",
    price: 100,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FQSC%20Kw152_drz5w?alt=media&token=fb8219ce-9925-4567-80b9-515c4a1e4b3c",
    specs: ["1000W Active 15\" 2-Way Trap Loudspeaker", "60° Axisymmetric Dispersion", "Extensive low-frequency extension (44 Hz)", "Premium Baltic birch enclosure"],
    description: "Flagship full-range loudspeaker featuring a 15\" driver for high-SPL applications without requiring a separate sub for medium rooms."
  },
  {
    id: "alto-busker",
    name: "Alto Busker - Battery Powered PA",
    category: "Audio",
    price: 50,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FAlto%20Busker%201jpg_CuMKA?alt=media&token=5fbf7d9c-5917-413d-9e7a-58f8306a0840",
    specs: ["200W Peak Battery-Powered Portable PA", "Up to 24 Hours Battery Life", "Bluetooth Audio Streaming", "Built-in Alesis FX & 3-Channel Mixer"],
    description: "Completely wireless, battery-powered PA system. Ideal for remote outdoor wedding ceremonies, cocktail hours, busking, and park events."
  },

  // --- LIGHTING ---
  {
    id: "chauvet-slimpar-hex-3-irc",
    name: "Chauvet SlimPAR HEX 3 IRC",
    category: "Lighting",
    price: 25,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2Fslimpar-hex3-irc-rightjpeg_TRwBI?alt=media&token=56e8b943-d48c-49e7-ae3d-2b71f948dfad",
    specs: ["RGBAW+UV (6-in-1 LED) Technology", "Flicker-Free Silent Operation", "Wireless IRC Remote Compatible", "Rich amber and ultraviolet color blending"],
    description: "Compact low-profile LED PAR light offering true amber warmth and blacklight UV effects. Perfect for stage washes and architectural accents."
  },
  {
    id: "chauvet-slimpar-quad-3-irc",
    name: "Chauvet SlimPAR QUAD 3 IRC",
    category: "Lighting",
    price: 25,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2Fslimpar-quad-3-irc-rightjpeg_M0360?alt=media&token=2b47b8ea-322f-48bb-8506-1ba8f9fe2e2d",
    specs: ["Quad-Color RGBA LEDs", "DMX & Master/Slave Linkable", "Punchy vibrant wash with amber warmth", "Low heat, completely silent"],
    description: "High-output quad-color wash light engineered for stage backdrops, column uplighting, and band illumination."
  },
  {
    id: "chauvet-slimpar-h6-usb",
    name: "Chauvet SlimPAR H6 USB",
    category: "Lighting",
    price: 25,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FSlimPAR-H6-USB-RIGHTjpeg_KxuJ4?alt=media&token=f976c390-30a9-4591-92ed-e9653dc86d42",
    specs: ["D-Fi USB Wireless DMX Compatible", "6-in-1 RGBAW+UV LEDs", "Power linking capabilities", "Ideal for quick cable-free lighting setups"],
    description: "Ultra-flexible wash light with wireless DMX compatibility for clean, wire-free room installations."
  },
  {
    id: "colorrail-irc",
    name: "COLORrail IRC",
    category: "Lighting",
    price: 25,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FCOLORrail-IRC-RIGHTjpg_GZWFc?alt=media&token=ca68bbd5-c456-4458-a8d1-9184d3fa9f53",
    specs: ["Linear LED Strip / Batten Wash", "Individual Pixel Zone Control", "Built-in Chase & Strobe Programs", "Wide 40-inch wide wall graze coverage"],
    description: "Linear wall-wash bar fixture capable of vibrant color sweeps, stage border footlighting, and dynamic dance floor chases."
  },
  {
    id: "chauvet-lfs-75",
    name: "Chauvet LFS-75 Followspot",
    category: "Lighting",
    price: 30,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FLFS-75DMX-LEFTjpg_yPOsa?alt=media&token=6daa47b2-440a-49ad-a9c7-76bfc44d6cda",
    specs: ["75W High-Power LED Followspot", "Manual Zoom & Iris Framing", "7 Dichroic Colors + White", "Smooth 0-100% mechanical dimming"],
    description: "Professional followspot spotlight for illuminating key speakers, wedding first dances, bride & groom grand entrances, and stage soloists."
  },
  {
    id: "chauvet-gigbar-move",
    name: "Chauvet GigBAR Move",
    category: "Lighting",
    price: 50,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FGigBAR-Move-FRONTjpg_FA6M5?alt=media&token=85e10644-9e8c-4ad9-a078-5931688e26ea",
    specs: ["5-in-1 Complete Lighting System", "2 Moving Heads + 2 RGB/UV Derby + 2 PARs + Laser + Strobe", "Tripod, wireless footswitch & carry bags included", "Standalone Sound-Active or DMX controlled"],
    description: "The ultimate instant party and dance floor light show on a single tripod bar. Packs an unbelievable variety of effects into 5 minutes of setup."
  },
  {
    id: "rockville-rf-wedge-uplights-x6",
    name: "Rockville RF Wedge Uplights x6",
    category: "Lighting",
    price: 80,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FRockville%20Wedgejpg_Lr7yv?alt=media&token=8f7d2385-7821-4381-a74e-bfe0c0b1e1bf",
    specs: ["Set of 6 100% Wireless Battery Powered Uplights", "Up to 16 Hours Battery Operation", "Wireless RF Remote Control", "Wedge-shaped design for seamless wall & corner placement"],
    description: "Turn any banquet hall, tent, or venue into a high-end luxury space with this complete 6-pack of 100% wireless uplights."
  },
  {
    id: "chauvet-intimidator-spot-350",
    name: "Chauvet Intimidator Spot 350",
    category: "Lighting",
    price: 75,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FCHAUVET%20INTIMIDATOR%20SPOT%20LED%20350jpg_Z1AOW?alt=media&token=bfc3f158-b549-4a27-9287-a4f448d875f6",
    specs: ["75W High-Output Moving Head Spot", "Motorized Focus & Rotating Gobos", "3-Facet Rotating Prism", "Split-color effects and high-speed pan/tilt"],
    description: "Club-grade intelligent moving head light capable of projecting sharp custom gobos, rotating patterns, and dazzling beam sweeps across the ceiling."
  },
  {
    id: "chauvet-intimidator-hybrid-140sr",
    name: "Chauvet Intimidator Hybrid 140SR",
    category: "Lighting",
    price: 150,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FIntimidator-Hybrid-140SR-RIGHT-1webp_XRskW?alt=media&token=84110ac3-88b5-4b61-a492-226603cf52e4",
    specs: ["True 140W Discharge Hybrid (Beam, Spot, Wash)", "Motorized Zoom (3° to 29°)", "Dual Overlapping Prisms", "Intense piercing beam cut-through"],
    description: "Festival-tier hybrid moving fixture. Shifts effortlessly between a laser-tight concert beam, sharp patterned spot, and wide stage wash."
  },

  // --- DJ GEAR ---
  {
    id: "pioneer-cdj-2000nxs2",
    name: "Pioneer CDJ-2000NXS2",
    category: "DJ Gear",
    price: 150,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FPioneer%20CDJ-NXS2_yo4Hy?alt=media&token=66d5e998-6f2f-4552-a646-d63f9868b66c",
    specs: ["Industry Standard Pro DJ Media Player", "7-Inch Full-Color Touch Screen with Qwerty Keyboard", "96kHz/24-bit High-Resolution Audio Support", "Pro DJ Link LAN & FLAC/ALAC Compatibility"],
    description: "The global rider-standard media player required by international touring DJs, festival headliners, and high-profile wedding DJs."
  },
  {
    id: "pioneer-djm-900nxs2",
    name: "Pioneer DJM-900NXS2",
    category: "DJ Gear",
    price: 175,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FPioneer%20DJM-900%20NXS2_B1a4z?alt=media&token=139b8c8c-d415-4830-b77f-5029282153b1",
    specs: ["4-Channel Club Mixer with 64-bit Audio Processing", "Dual USB Soundcards for Seamless DJ Handoffs", "Independent Send/Return & 14 Beat FX", "Magvel Crossfader with Adjustable Curve"],
    description: "The undisputed club standard 4-channel DJ mixer. Warm, detailed analog-style sound with unbeatable FX precision."
  },
  {
    id: "technics-1200-m3d",
    name: "Technics 1200 M3D",
    category: "DJ Gear",
    price: 85,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FTechnics-SL1200-M3D_zWCJ8?alt=media&token=656d10fb-0e1f-4116-91b1-994a156c4315",
    specs: ["Quartz Direct Drive Professional Turntable", "No Center-Click Pitch Fader with Reset Button", "Heavy Die-Cast Aluminum Body for Vibration Dampening", "Includes Slipmat and Headshell"],
    description: "Legendary vinyl direct-drive turntable designed for scratch DJs, vinyl purists, and high-end wedding DJ sets."
  },
  {
    id: "technics-sl-1200mk2",
    name: "Technics SL-1200MK2",
    category: "DJ Gear",
    price: 85,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FIMG_2839jpeg_kVtdl?alt=media&token=aea32b26-296e-474c-8dd7-51ba5ace1010",
    specs: ["The Iconic Classic Direct-Drive Turntable", "High Torque Quartz-Locked Motor", "Adjustable Tonearm Weight and Anti-Skate", "Pristine analog pitch responsiveness"],
    description: "The turntable that built modern dance music. Rock-solid quartz speed stability and legendary durability."
  },
  {
    id: "pioneer-ddj-sz",
    name: "Pioneer DDJ-SZ",
    category: "DJ Gear",
    price: 150,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FDDJ-SZ_hdK7Z?alt=media&token=d66492fc-06ce-4a33-a9bf-10d866ffbdb4",
    specs: ["Full-Sized 4-Channel Professional DJ Controller", "CDJ-Size Mechanical Jog Wheels with On-Jog Displays", "Dual USB Ports for 2 Computers", "Multi-Colored Velocity Performance Pads"],
    description: "Massive flagship all-in-one controller matching the exact layout and feel of CDJ-2000s and a DJM-900 mixer."
  },
  {
    id: "pioneer-djm-s9",
    name: "Pioneer DJM-S9",
    category: "DJ Gear",
    price: 120,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FIMG_1804jpeg_UuaaX?alt=media&token=7d7f4bb1-0922-4fe2-9c1f-c1d7af5e9397",
    specs: ["2-Channel Battle Mixer for Serato DJ Pro", "Magvel Fader Pro with customizable tension & curve", "Tactile Performance Pads with Multi-Color LEDs", "Fast-action FX levers"],
    description: "Premier 2-channel battle mixer loved by turntablists and open-format DJs worldwide."
  },

  // --- SOUNDBOARDS ---
  {
    id: "yamaha-mgp24x",
    name: "Yamaha MGP24X",
    category: "Soundboards",
    price: 150,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FYamaha%20MGP24X%20_3ucuo?alt=media&token=93c97579-cbae-4804-9dc1-29b9c5eeac83",
    specs: ["24-Channel Analog Console with Digital Heart", "16 Mic Inputs with 48V Phantom Power", "Dual Digital Effects Engines (SPX Reverb + REV-X)", "D-PRE Discrete Class-A Mic Preamps"],
    description: "Versatile 24-channel console ideal for live bands, music festivals, theatrical productions, and corporate conferences."
  },
  {
    id: "allen-heath-zed-10fx",
    name: "Allen & Heath Zed-10FX",
    category: "Soundboards",
    price: 30,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FAllen%20_%20Heath%20Zed-10FX%20-%20Mixer_KrqeS?alt=media&token=b54cc059-4868-4f21-b4cb-25c0e9bd1292",
    specs: ["Compact 10-Channel Live & Studio Mixer", "4 Mic/Line Inputs with 2 High-Impedance Guitar DI inputs", "British MusiQ 3-Band Swept EQ", "Studio-grade internal FX processor"],
    description: "Renowned British audio engineering in a portable chassis. Superb sonic warmth for acoustic duos, speaking panels, and ceremony audio."
  },
  {
    id: "behringer-xenyx-x1222usb",
    name: "Behringer Xenyx X1222USB",
    category: "Soundboards",
    price: 50,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FBehringer%20X1222_UpYY0?alt=media&token=6a40ab33-494e-49de-9a66-a94461eac1c8",
    specs: ["16-Input 2/2-Bus Analog Mixer with USB Audio", "6 State-of-the-art XENYX Mic Preamps", "One-knob dynamic studio compressors", "7-band stereo graphic EQ with FBQ Feedback Detection"],
    description: "Reliable, easy-to-use mixer equipped with compression, built-in multi-FX, and graphic EQ for quick feedback suppression."
  },
  {
    id: "allen-heath-zed-6fx",
    name: "Allen & Heath Zed-6FX",
    category: "Soundboards",
    price: 15,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FZED-6FX-top1-800x660jpgwebp_TsE97?alt=media&token=aeea228b-1cb0-414a-95ce-3e5c992a3a6c",
    specs: ["Ultra-Compact 6-Channel Mixer with FX", "2 Mic/Line Inputs with GSPre Boutique Preamps", "2 Stereo Inputs for Keyboards/Laptops", "Internal reverb and delay engine"],
    description: "Pocket-sized boutique mixer for solo artists, ceremony cocktail audio, or podcasting/interview recording."
  },

  // --- MICROPHONES ---
  {
    id: "shure-sm58",
    name: "Shure SM58",
    category: "Microphones",
    price: 10,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FShure%20Sm58_kIVPm?alt=media&token=9962c6a7-ca11-48b3-9936-12f3d9b23373",
    specs: ["The Legendary Cardioid Dynamic Vocal Microphone", "Built-in Spherical Wind and Pop Filter", "Pneumatic Shock-Mount System to Eliminate Handling Noise", "Steel mesh ball grille"],
    description: "The world's most trusted vocal microphone for speeches, MCs, wedding toasts, and lead vocalists."
  },
  {
    id: "shure-slxd24d-sm58-dual",
    name: "Shure SLXD24D/SM58 Dual Wireless",
    category: "Microphones",
    price: 80,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FIMG_6687jpeg_YxpnL?alt=media&token=8fef0132-b402-433d-b4a4-45e6eab37a93",
    specs: ["Dual-Channel Digital Wireless System", "2x Shure SM58 Wireless Handheld Transmitters", "24-bit Digital Audio Clarity with 120 dB Dynamic Range", "Rock-solid 330 ft operating range with zero dropouts"],
    description: "Premium digital wireless handheld pair. Flawless audio transparency and rock-solid RF stability for weddings and corporate galas."
  },
  {
    id: "sennheiser-ew-100-835",
    name: "Sennheiser EW 100 835 Wireless Microphone",
    category: "Microphones",
    price: 50,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FScreen%20Shot%202023-11-14%20at%203.26.20%20PM_RtYRE?alt=media&token=0934082c-8914-4e24-a004-ed438da10d2a",
    specs: ["Evolution G3/G4 Wireless System", "e835 Cardioid Dynamic Capsule", "Auto-Frequency Scan & Infrared Sync", "Rugged metal housing"],
    description: "Broadcaster and touring-favorite wireless microphone. Crisp high-frequency vocal cut-through."
  },
  {
    id: "sennheiser-xsw-1-835-dual",
    name: "Sennheiser XSW 1-835 Dual",
    category: "Microphones",
    price: 40,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FSennheiser%20Dual_F8lwc?alt=media&token=14a1943f-d1a9-4aa2-aa1e-221d29bc768f",
    specs: ["2-Channel Wireless System with Dual e835 Handhelds", "Antenna-switching diversity reception", "Automatic frequency management", "Integrated antennas"],
    description: "High-value dual wireless system that is fast to deploy and produces great speech and singing vocals."
  },
  {
    id: "sennheiser-xsw-1-825",
    name: "Sennheiser XSW 1-825 Wireless Microphone",
    category: "Microphones",
    price: 25,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FSennheiser%20XSW%201-825jpg_BNn54?alt=media&token=06a18945-df91-4650-ab78-584ee7cfdeff",
    specs: ["Single Wireless Handheld System", "e825 Dynamic Cardioid Capsule", "10 compatible UHF channels", "Intuitive icon-based receiver display"],
    description: "Easy-to-operate wireless handheld mic for meetings, auctions, toasts, and party MCs."
  },
  {
    id: "sennheiser-xsw-1-me3-a",
    name: "Sennheiser XSW 1-ME3-A Headset / Lavalier",
    category: "Microphones",
    price: 40,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FIMG_4573jpeg_IuMVe?alt=media&token=0d8ca2eb-0fb9-4d28-8e41-190aa13e1364",
    specs: ["Wireless Bodypack System with ME3 Headset/Lavalier", "High-feedback-rejection cardioid capsule", "Lightweight comfortable headframe", "Ideal for hands-free presentations, fitness instructors & officiants"],
    description: "Hands-free wireless headset microphone system. Essential for wedding officiants, active presenters, dance instructors, and theater performers."
  },

  // --- TRUSS ---
  {
    id: "global-truss-5ft",
    name: "Global Truss 5’",
    category: "Truss",
    price: 30,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2Fglab%20Trussjpg_gbnDI?alt=media&token=fc8abfd5-0390-4df5-8d2b-83807d6c5129",
    specs: ["F34 Square Aluminum Truss Segment (5 Feet)", "11 7/16\" Outer Width, 2\" Tubing", "Conical connector coupling hardware included", "Certified high-load structural capacity"],
    description: "Heavy-duty aluminum box truss for stage lighting totems, hanging moving heads, TV mounts, and speaker rigging."
  },
  {
    id: "global-truss-6-5ft",
    name: "Global Truss 6.5’",
    category: "Truss",
    price: 40,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2Fglab%20Trussjpg_gbnDI?alt=media&token=fc8abfd5-0390-4df5-8d2b-83807d6c5129",
    specs: ["F34 Square Truss Segment (2.0 Meter / 6.56 Feet)", "High-strength 6082-T6 alloy aluminum", "Fast conical pin assembly", "Includes connecting pins and R-clips"],
    description: "Standard totem height truss section. Often dressed with white lycra warmers and internal uplighting for elegant wedding visual totems."
  },
  {
    id: "global-truss-8ft",
    name: "Global Truss 8’",
    category: "Truss",
    price: 40,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2Fglab%20Trussjpg_gbnDI?alt=media&token=fc8abfd5-0390-4df5-8d2b-83807d6c5129",
    specs: ["F34 Square Truss Segment (2.5 Meter / 8.2 Feet)", "Rigid structural span rating", "Compatible with Global Truss corners and base plates", "Sleek brushed aluminum finish"],
    description: "Full-length truss segment for constructing lighting goalposts, stage arches, and hanging main concert lighting."
  },

  // --- VISUALS ---
  {
    id: "tv-screen-32",
    name: "32\" TV Screen",
    category: "Visuals",
    price: 50,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2F32inch%20Samsung_4JEUV?alt=media&token=fca1294d-c01c-4b27-846c-2ce61e115121",
    specs: ["1080p Full HD Display Panel", "HDMI, USB media playback inputs", "Compact tabletop or floor stand mountable", "Great for confidence monitor or digital signage"],
    description: "Compact HD monitor for wedding photo slideshows, confidence monitoring for keynote speakers, or bar/entryway displays."
  },
  {
    id: "tv-screen-55",
    name: "55\" TV Screen",
    category: "Visuals",
    price: 100,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2F55_%20RCA%20LED%20TV%20_xCovo?alt=media&token=cb20357b-fe60-4db9-8721-b277ebe00ea8",
    specs: ["55\" 4K Ultra HD Slim-Bezel LED Display", "High brightness for ambient room lighting", "Dual HDMI inputs with HDCP support", "Mountable to truss totems or sleek rolling floor stands"],
    description: "Striking 55\" 4K screen for music video DJing, corporate PowerPoint presentations, brand sponsorship loops, and montage videos."
  },
  {
    id: "projector-screen-120",
    name: "120” Projector Screen",
    category: "Visuals",
    price: 130,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2F120%22%20Screenpng_upfD5?alt=media&token=0d580ee2-3b34-4c64-bf06-7fedc1cd4f48",
    specs: ["120-Inch Diagonal 16:9 Widescreen Surface", "Wrinkle-free high-gain matte white fabric", "Heavy-duty folding aluminum frame & legs", "Front or rear projection capable"],
    description: "Large-format projection screen for film screenings, gala award ceremonies, conference presentations, and huge wedding montages."
  },
  {
    id: "epson-ex5250",
    name: "Epson EX5250 Projector",
    category: "Visuals",
    price: 20,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FEpson%20ex5250jpg_xT6XZ?alt=media&token=84af92a8-03bc-40a8-86b0-0934d4a874e5",
    specs: ["3600 Lumens Color and White Brightness", "XGA (1024 x 768) Native Resolution with 1080p scaling", "HDMI, VGA, USB and Wireless LAN connectivity", "Instant Off technology and easy horizontal keystone"],
    description: "Bright, vivid multimedia projector capable of crisp presentations even in well-lit rooms and ballrooms."
  },

  // --- ADD-ONS & PRODUCTION ---
  {
    id: "photo-booth",
    name: "Photo Booth",
    category: "Add-Ons",
    price: 700,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FScreen%20Shot%202023-12-01%20at%209.45.40%20PM_Fw2io?alt=media&token=94c88f1e-162e-421f-9ab4-82d176459b59",
    specs: ["Interactive Digital Touchscreen Photo Booth", "Instant SMS, Email, Airdrop & QR Code Sharing", "Custom Branded Graphic Overlay & Template Design", "Fun Party Props & Backdrop included"],
    description: "The crowd-favorite party enhancer! Guests snap fun photos, GIFs, and boomerangs with instant phone sharing and a full digital gallery for the host."
  },
  {
    id: "intelistage-stage-6x",
    name: "3x3' Intelistage x6 with Steps and Skirt",
    category: "Add-Ons",
    price: 225,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FIntelistagejpg_PqmVz?alt=media&token=b4294c10-c489-4945-b429-d8265eb3f327",
    specs: ["Modular 6-Platform Riser System (Creates 9'x6' or 18'x3' Stage)", "Non-slip carpeted finish with locking hardware", "Includes safety steps and clean black perimeter skirt", "Supports over 185 lbs per square foot"],
    description: "Professional modular riser stage for bands, DJs, keynote speakers, and ceremony altars. Elevates your event to true concert level."
  },
  {
    id: "marq-700-haze",
    name: "Marq 700 Haze Machine",
    category: "Add-Ons",
    price: 15,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FMarq%20700%20HazeJPG_X0kiq?alt=media&token=507ba42f-4c93-4619-b5a0-2e50fd741f47",
    specs: ["Water-Based Safe Atmosphere Generator", "Even light haze dispersal that makes beams visible", "Fast 2-minute heat-up time with wired remote", "Safe for indoor venues, non-toxic"],
    description: "Creates a fine atmospheric mist that makes light beams, moving spots, and laser lines come to life in 3D without clouding the room."
  },

  // --- ACCESSORIES, CABLES, MISC ---
  {
    id: "speaker-stands-pair",
    name: "Speaker Stands",
    category: "Accessories, Cables, Misc",
    price: 10,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FOnstage%20stands_FLE1W?alt=media&token=f506a2dd-15ba-4c24-b769-c5af43002915",
    specs: ["Heavy-Duty Aluminum Tripod Stands with Locking Pins", "Adjustable Height from 44\" to 80\"", "120 lb Weight Capacity per stand", "Fits all standard 1-3/8\" speaker sockets"],
    description: "Sturdy, tour-grade tripod speaker stands to safely elevate loudspeakers above crowd height for maximum sound throw."
  },
  {
    id: "boom-mic-stand",
    name: "Boom Mic Stand",
    category: "Accessories, Cables, Misc",
    price: 10,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FBoom%20Mic_En7uL?alt=media&token=03e5ca34-c62b-440e-aa88-4204be5e3d70",
    specs: ["Tripod Base with Telescopic Boom Arm", "Die-Cast Zinc Clutch for secure positioning", "Steel construction with cable management clips", "Essential for singing guitarists and drum mics"],
    description: "Versatile boom arm stand providing flexible microphone reach for vocalists playing instruments, speeches, or podiums."
  },
  {
    id: "mic-stand-straight",
    name: "Mic Stand (Straight Round Base)",
    category: "Accessories, Cables, Misc",
    price: 10,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FMic%20Stand%20Straight_JTUTV?alt=media&token=50ee0255-aa6e-4740-b177-039aa304875e",
    specs: ["Heavy Cast-Iron Round Base with Rubber Dampening", "Single-Hand Height Adjustment", "Minimal stage footprint", "Classic front-of-stage appearance"],
    description: "Clean, classic round base stand that won't trip performers on stage. Ideal for lead singers and keynote speakers."
  },
  {
    id: "stanchion-barrier-78",
    name: "Stanchion Barrier 78\"",
    category: "Accessories, Cables, Misc",
    price: 10,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FStanchion_BUwmn?alt=media&token=3927910d-9baf-4142-800c-60427349f30e",
    specs: ["Polished Black Stainless Steel Post", "78\" Retractable Black Webbing Belt", "Weighted anti-scratch rubber base (16 lbs)", "4-Way connection collar for versatile queue arrangements"],
    description: "Crowd control and VIP red-carpet barrier post for managing guest queues, VIP areas, or guarding DJ equipment."
  },
  {
    id: "alto-stealth-pro-wireless",
    name: "Alto Stealth Pro Wireless",
    category: "Accessories, Cables, Misc",
    price: 15,
    unit: "day",
    image: "https://firebasestorage.googleapis.com/v0/b/rentle-prod.appspot.com/o/product-images%2FQtxGS9TpC29EbpmJ0B7P%2FAlto%20Stealth%20Projpg_AlVXA?alt=media&token=4cd0d5e3-8644-4760-9fdb-917b5069e8c4",
    specs: ["2-Channel Wireless Audio Transmitter & Receiver System", "Up to 200+ ft Transmission Range with True Diversity", "Eliminates long, hazardous audio cable runs", "Balanced XLR and 1/4\" audio connectivity"],
    description: "Eliminate long XLR cables running across dance floors or patios! Sends pristine stereo audio wirelessly to satellite and remote speakers."
  }
];
