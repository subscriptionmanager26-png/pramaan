#!/usr/bin/env python3
"""Generate 16:9 Art Deco / Bauhaus desk hero placeholders (cream + primaries + gold)."""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw

W, H = 1280, 720
CREAM = (245, 238, 220)
GOLD = (198, 156, 78)
RED = (204, 45, 52)
BLUE = (32, 78, 156)
YELLOW = (232, 196, 48)
INK = (28, 28, 32)


def base() -> Image.Image:
    img = Image.new("RGB", (W, H), CREAM)
    d = ImageDraw.Draw(img)
    # Deco frame
    d.rectangle([24, 24, W - 24, H - 24], outline=GOLD, width=3)
    d.line([(W // 2, 40), (W // 2, H - 40)], fill=GOLD, width=2)
    for y in range(80, H - 80, 48):
        d.polygon([(W // 2 - 8, y), (W // 2, y - 14), (W // 2 + 8, y)], fill=GOLD)
    return img, d


def save(slug: str, draw_fn) -> None:
    img, d = base()
    draw_fn(d)
    out = Path(__file__).resolve().parents[1] / "public" / "desk" / f"{slug}.jpg"
    img.save(out, "JPEG", quality=92)
    print("wrote", out)


def dac(d: ImageDraw.ImageDraw) -> None:
    # artillery shell + procurement pipeline
    d.rectangle([80, 120, 520, 600], fill=BLUE)
    d.polygon([(300, 160), (420, 220), (420, 520), (300, 580), (180, 520), (180, 220)], fill=RED)
    d.ellipse([250, 280, 350, 380], fill=YELLOW)
    d.rectangle([640, 200, 1180, 260], fill=RED)
    d.rectangle([640, 300, 1100, 360], fill=BLUE)
    d.rectangle([640, 400, 1050, 460], fill=YELLOW)
    for i, w in enumerate([1180, 1100, 1050]):
        d.polygon([(w, 230 + i * 100), (w + 40, 250 + i * 100), (w, 270 + i * 100)], fill=GOLD)


def agoda(d: ImageDraw.ImageDraw) -> None:
    # globe + flight arc
    d.ellipse([100, 180, 480, 560], outline=BLUE, width=8)
    d.arc([120, 200, 460, 540], 30, 210, fill=GOLD, width=4)
    d.arc([140, 220, 440, 520], 200, 340, fill=RED, width=3)
    d.polygon([(700, 520), (760, 420), (900, 400), (1050, 360), (1120, 300)], fill=BLUE)
    d.ellipse([1080, 270, 1140, 330], fill=YELLOW)
    d.rectangle([680, 140, 760, 200], fill=RED)
    d.rectangle([820, 120, 900, 180], fill=YELLOW)


def paytm(d: ImageDraw.ImageDraw) -> None:
    # wallet + rising margin bars
    d.rounded_rectangle([120, 200, 460, 560], radius=28, fill=BLUE)
    d.rounded_rectangle([160, 260, 420, 500], radius=18, fill=CREAM)
    for i, h in enumerate([120, 180, 240, 320]):
        x = 700 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.line([(680, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(900, 200), (980, 240), (900, 280)], fill=GOLD)


def mankind(d: ImageDraw.ImageDraw) -> None:
    # Rx pill vs flat OTC shelf
    d.rounded_rectangle([100, 220, 280, 520], radius=40, fill=RED)
    d.line([(190, 260), (190, 480)], fill=CREAM, width=16)
    d.rectangle([340, 280, 520, 320], fill=BLUE)
    d.rectangle([340, 360, 520, 400], fill=BLUE)
    d.rectangle([340, 440, 520, 480], fill=BLUE)
    for y in range(300, 520, 36):
        d.rectangle([700, y, 1120, y + 20], fill=YELLOW if y % 72 else GOLD)
    d.line([(700, 540), (1120, 540)], fill=INK, width=2)


def transformers(d: ImageDraw.ImageDraw) -> None:
    # transformer coil + three plant blocks
    for i in range(3):
        x = 90 + i * 150
        d.rectangle([x, 380, x + 110, 560], fill=[RED, BLUE, YELLOW][i])
        d.polygon([(x, 380), (x + 55, 340), (x + 110, 380)], fill=INK)
    d.ellipse([620, 220, 900, 500], outline=GOLD, width=6)
    for a in range(0, 360, 30):
        r = 140
        cx, cy = 760, 360
        x = cx + r * math.cos(math.radians(a))
        y = cy + r * math.sin(math.radians(a))
        d.line([(cx, cy), (x, y)], fill=BLUE, width=3)
    d.rectangle([980, 180, 1160, 560], fill=RED)
    d.rectangle([1010, 220, 1130, 300], fill=CREAM)


def maruti_q2(d: ImageDraw.ImageDraw) -> None:
    # car silhouette + rising cost bars
    d.rounded_rectangle([100, 320, 480, 520], radius=24, fill=BLUE)
    d.ellipse([140, 360, 220, 440], fill=CREAM)
    d.ellipse([360, 360, 440, 440], fill=CREAM)
    for i, h in enumerate([80, 140, 200, 280]):
        x = 640 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[RED, YELLOW, RED, BLUE][i])
    d.polygon([(900, 180), (980, 220), (900, 260)], fill=GOLD)


def mithai(d: ImageDraw.ImageDraw) -> None:
    # gift box + gold foil accent
    d.rounded_rectangle([120, 200, 440, 520], radius=20, fill=RED)
    d.rectangle([260, 200, 300, 520], fill=GOLD)
    d.rectangle([120, 340, 440, 380], fill=GOLD)
    d.ellipse([720, 260, 920, 460], fill=YELLOW)
    d.arc([740, 280, 900, 440], 200, 340, fill=GOLD, width=6)
    d.rectangle([980, 180, 1140, 560], fill=BLUE)


def ioc_shipping(d: ImageDraw.ImageDraw) -> None:
    # tanker + pipeline to refinery
    d.polygon([(100, 400), (380, 320), (380, 480), (100, 560)], fill=BLUE)
    d.rectangle([200, 340, 280, 380], fill=YELLOW)
    d.line([(400, 420), (700, 420)], fill=GOLD, width=5)
    d.rectangle([700, 300, 1100, 540], fill=RED)
    d.polygon([(1100, 420), (1180, 380), (1180, 460), (1100, 420)], fill=BLUE)
    d.ellipse([820, 360, 980, 480], outline=GOLD, width=4)


def lt_infra(d: ImageDraw.ImageDraw) -> None:
    # crane + ascending order blocks
    d.rectangle([140, 480, 180, 560], fill=INK)
    d.polygon([(160, 480), (280, 200), (320, 480)], fill=YELLOW)
    d.line([(280, 200), (420, 260)], fill=GOLD, width=4)
    for i, w in enumerate([680, 760, 840, 920]):
        d.rectangle([w, 560 - 80 - i * 60, w + 70, 560], fill=[RED, BLUE, YELLOW, RED][i])


def redington(d: ImageDraw.ImageDraw) -> None:
    # phone stack + slowing demand curve
    for i in range(3):
        d.rounded_rectangle([120 + i * 40, 220 + i * 30, 320 + i * 40, 520 + i * 30], radius=16, fill=[BLUE, RED, YELLOW][i])
    d.arc([640, 200, 1160, 560], 200, 320, fill=GOLD, width=8)
    d.line([(640, 480), (1160, 320)], fill=INK, width=2)


def telcos_6ghz(d: ImageDraw.ImageDraw) -> None:
    # tower + Wi-Fi arc vs fibre lane
    d.rectangle([120, 200, 200, 560], fill=BLUE)
    d.polygon([(160, 200), (220, 120), (280, 200)], fill=RED)
    for y in range(260, 520, 50):
        d.arc([60, y - 40, 340, y + 40], 270, 90, fill=YELLOW, width=3)
    d.rectangle([640, 280, 1120, 320], fill=GOLD)
    d.line([(640, 300), (1120, 300)], fill=INK, width=2)
    d.rectangle([700, 360, 1060, 520], fill=RED)
    d.ellipse([980, 400, 1060, 480], fill=CREAM)


def bajaj_auto_q2(d: ImageDraw.ImageDraw) -> None:
    # motorcycle + export arc
    d.ellipse([160, 400, 280, 480], fill=INK)
    d.ellipse([360, 400, 480, 480], fill=INK)
    d.rounded_rectangle([140, 320, 500, 420], radius=20, fill=BLUE)
    d.polygon([(700, 480), (900, 360), (1100, 400), (1000, 520)], fill=YELLOW)
    d.line([(720, 440), (1080, 380)], fill=GOLD, width=4)


def sbi_life_q2(d: ImageDraw.ImageDraw) -> None:
    # shield + rising premium bars
    d.polygon([(200, 520), (200, 280), (360, 200), (520, 280), (520, 520)], fill=BLUE)
    d.ellipse([300, 320, 420, 440], fill=CREAM)
    for i, h in enumerate([100, 160, 220, 280]):
        x = 680 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, YELLOW, RED, BLUE][i])


def star_health_h1(d: ImageDraw.ImageDraw) -> None:
    # cross + underwriting dial
    d.rectangle([200, 240, 280, 560], fill=RED)
    d.rectangle([120, 360, 360, 440], fill=RED)
    d.ellipse([720, 240, 1000, 520], outline=GOLD, width=6)
    d.pieslice([740, 260, 980, 500], 200, 320, fill=BLUE)
    d.line([(860, 380), (920, 320)], fill=YELLOW, width=5)


def hul_volume(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 280, 420, 540], fill=BLUE)
    for i, h in enumerate([80, 140, 220, 300]):
        d.rectangle([480 + i * 70, 560 - h, 530 + i * 70, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.ellipse([900, 260, 1100, 460], outline=GOLD, width=5)
    d.pieslice([920, 280, 1080, 440], 220, 340, fill=YELLOW)


def gst_brokerage_fpi(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 300, 460, 520], fill=BLUE)
    d.polygon([(720, 240), (880, 320), (720, 400)], fill=RED)
    d.line([(880, 320), (1120, 320)], fill=GOLD, width=4)
    d.ellipse([1080, 280, 1160, 360], fill=YELLOW)
    d.rectangle([720, 440, 1120, 500], fill=RED)


def overseas_retail(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 280, 320, 480], fill=BLUE)
    d.polygon([(700, 520), (760, 380), (900, 340), (1050, 380), (1120, 520)], fill=RED)
    d.line([(360, 380), (700, 420)], fill=GOLD, width=4)
    d.rectangle([940, 200, 1020, 280], fill=YELLOW)


def bpcl_kochi(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([140, 320, 480, 540], fill=BLUE)
    d.polygon([(300, 280), (420, 220), (420, 320)], fill=RED)
    d.rectangle([640, 360, 1120, 420], fill=YELLOW)
    d.polygon([(640, 390), (600, 450), (640, 510), (680, 450)], fill=GOLD)
    d.line([(760, 420), (1120, 420)], fill=INK, width=2)


def gst_post_sale(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 480, 520], fill=BLUE)
    d.rectangle([140, 320, 440, 380], fill=CREAM)
    for i, w in enumerate([520, 600, 680]):
        d.rectangle([w, 360 - i * 40, w + 80, 520], fill=[RED, YELLOW, RED][i])
    d.polygon([(900, 200), (1100, 280), (900, 360)], fill=GOLD)
    d.line([(720, 440), (1080, 440)], fill=INK, width=2)


def mumbai_outage(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 220, 460, 560], fill=BLUE)
    d.polygon([(160, 220), (420, 180), (420, 220)], fill=RED)
    d.line([(200, 300), (380, 480)], fill=YELLOW, width=8)
    d.line([(380, 300), (200, 480)], fill=YELLOW, width=8)
    d.ellipse([700, 320, 1100, 520], outline=GOLD, width=5)
    for x in range(720, 1080, 60):
        d.polygon([(x, 420), (x + 20, 380), (x + 40, 420)], fill=RED)


def ub_beer(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([140, 240, 260, 520], radius=20, fill=YELLOW)
    d.ellipse([180, 200, 220, 260], fill=GOLD)
    d.rectangle([320, 300, 520, 520], fill=BLUE)
    for i, h in enumerate([100, 180, 260]):
        d.rectangle([640 + i * 90, 560 - h, 700 + i * 90, 560], fill=[RED, BLUE, YELLOW][i])


def sc_cirp(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 180, 200, 560], fill=GOLD)
    d.polygon([(300, 520), (300, 240), (420, 160), (540, 240), (540, 520)], fill=BLUE)
    d.rectangle([700, 280, 1120, 340], fill=RED)
    d.polygon([(1120, 310), (1180, 280), (1180, 340), (1120, 310)], fill=GOLD)
    d.rectangle([700, 420, 1050, 480], fill=YELLOW)


def indiamart_q2(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 260, 480, 540], fill=BLUE)
    for y in range(300, 500, 50):
        d.rectangle([160, y, 440, y + 24], fill=CREAM if y % 100 else YELLOW)
    d.line([(520, 400), (1180, 200)], fill=RED, width=4)
    d.ellipse([1000, 160, 1140, 300], fill=GOLD)


def jio_listing_debut(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(700, 520), (760, 380), (900, 340), (1050, 380), (1120, 520)], fill=BLUE)
    for i, h in enumerate([80, 140, 200, 280]):
        x = 120 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.ellipse([980, 200, 1080, 300], fill=YELLOW)


def rbi_liquidity_squeeze(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 200, 420, 560], fill=BLUE)
    for i, h in enumerate([400, 320, 240, 160, 100]):
        d.rectangle([640 + i * 55, 560 - h, 690 + i * 55, 560], fill=GOLD if i > 2 else RED)
    d.line([(720, 560), (1180, 560)], fill=INK, width=2)


def pnb_housing(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(160, 520), (160, 320), (280, 240), (400, 320), (400, 520)], fill=RED)
    d.rectangle([440, 360, 520, 520], fill=BLUE)
    for i, h in enumerate([120, 200, 280]):
        d.rectangle([700 + i * 90, 560 - h, 760 + i * 90, 560], fill=[YELLOW, RED, BLUE][i])


def meesho_q2(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 280, 420, 520], radius=24, fill=BLUE)
    d.ellipse([180, 320, 360, 420], fill=YELLOW)
    d.line([(480, 400), (1120, 280)], fill=RED, width=5)
    d.polygon([(1050, 260), (1140, 300), (1050, 340)], fill=GOLD)


def piramal_pharma(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([140, 240, 280, 520], radius=28, fill=RED)
    d.rectangle([320, 300, 520, 520], fill=BLUE)
    for i, h in enumerate([100, 180, 260, 340]):
        d.rectangle([680 + i * 80, 560 - h, 740 + i * 80, 560], fill=[YELLOW, RED, BLUE, GOLD][i])


def nppa_mrp_list(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 240, 360, 540], fill=BLUE)
    d.rounded_rectangle([180, 300, 300, 480], radius=16, fill=CREAM)
    for i, h in enumerate([280, 220, 160, 100]):
        d.rectangle([520 + i * 70, 560 - h, 580 + i * 70, 560], fill=[RED, YELLOW, BLUE, GOLD][i])
    d.line([(500, 560), (1180, 560)], fill=INK, width=2)


def radico_premium(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 480, 540], fill=RED)
    d.ellipse([200, 320, 380, 480], fill=YELLOW)
    for i, h in enumerate([100, 180, 260, 340]):
        d.rectangle([640 + i * 85, 560 - h, 710 + i * 85, 560], fill=[BLUE, RED, YELLOW, BLUE][i])


def pvr_inox_q2(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(140, 520), (140, 280), (480, 280), (480, 520)], fill=BLUE)
    d.rectangle([180, 320, 440, 480], fill=INK)
    d.ellipse([260, 380, 360, 440], fill=YELLOW)
    for x in range(700, 1100, 80):
        d.rectangle([x, 400, x + 50, 560], fill=RED if x % 160 else GOLD)


def hero_motocorp_q2(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 380, 420, 560], fill=INK)
    d.ellipse([140, 400, 400, 540], fill=YELLOW)
    d.rectangle([480, 320, 520, 560], fill=BLUE)
    d.polygon([(540, 520), (600, 420), (720, 400), (900, 440), (980, 520)], fill=RED)
    for i, h in enumerate([140, 220, 300]):
        d.rectangle([1020 + i * 50, 560 - h, 1060 + i * 50, 560], fill=GOLD)


def adani_vtti(d: ImageDraw.ImageDraw) -> None:
    # storage tanks + globe trade lanes
    for i in range(4):
        d.ellipse([120 + i * 90, 420, 200 + i * 90, 560], fill=BLUE if i % 2 else RED)
        d.rectangle([150 + i * 90, 360, 170 + i * 90, 430], fill=GOLD)
    d.arc([680, 180, 1120, 520], 200, 340, fill=YELLOW, width=6)
    d.line([(720, 520), (900, 320), (1080, 280)], fill=GOLD, width=3)
    d.rectangle([700, 140, 780, 200], fill=RED)


def tvs_spinoff(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 400, 340, 560], fill=INK)
    d.ellipse([160, 420, 320, 540], fill=YELLOW)
    d.rectangle([380, 280, 440, 560], fill=BLUE)
    d.rounded_rectangle([640, 240, 880, 520], radius=20, fill=RED)
    d.line([(760, 280), (760, 480)], fill=CREAM, width=12)
    d.polygon([(920, 360), (980, 320), (1040, 360), (980, 400)], fill=GOLD)


def cholafin_disb(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([100, 180, 260, 340, 420]):
        x = 120 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, BLUE, YELLOW, RED, GOLD][i])
    d.rounded_rectangle([680, 260, 1120, 520], radius=24, fill=BLUE)
    d.ellipse([780, 340, 860, 420], fill=YELLOW)
    d.rectangle([900, 320, 1040, 440], fill=CREAM)


def info_edge_ceo(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 200, 480, 560], fill=BLUE)
    d.rectangle([180, 260, 420, 320], fill=CREAM)
    d.rectangle([180, 360, 420, 420], fill=CREAM)
    d.rectangle([180, 460, 420, 520], fill=CREAM)
    d.polygon([(700, 520), (760, 280), (820, 520)], fill=RED)
    d.polygon([(880, 520), (940, 320), (1000, 520)], fill=YELLOW)
    d.line([(700, 560), (1100, 560)], fill=GOLD, width=3)


def jsw_cement_north(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(160, 520), (280, 280), (400, 520)], fill=RED)
    d.rectangle([300, 360, 340, 520], fill=GOLD)
    for i, h in enumerate([80, 140, 200]):
        d.rectangle([680 + i * 100, 560 - h, 740 + i * 100, 560], fill=[BLUE, YELLOW, BLUE][i])
    d.ellipse([980, 380, 1100, 500], outline=GOLD, width=5)


def bandhan_irdai(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(160, 520), (160, 320), (280, 240), (400, 320), (400, 520)], fill=BLUE)
    d.rectangle([440, 360, 520, 520], fill=RED)
    for i, h in enumerate([320, 260, 200, 140]):
        d.rectangle([680 + i * 55, 560 - h, 730 + i * 55, 560], fill=GOLD if i > 1 else YELLOW)


def blue_star_ac(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 200, 420, 520], radius=16, fill=BLUE)
    for i in range(5):
        d.line([(140, 240 + i * 50), (400, 240 + i * 50)], fill=CREAM, width=2)
    d.polygon([(700, 520), (760, 160), (820, 520)], fill=YELLOW)
    for i, h in enumerate([100, 160, 220]):
        d.rectangle([900 + i * 70, 560 - h, 950 + i * 70, 560], fill=[RED, BLUE, RED][i])


def symphony_overseas(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([100, 200, 460, 560], outline=BLUE, width=6)
    d.arc([130, 230, 430, 530], 20, 160, fill=RED, width=5)
    d.rectangle([640, 280, 780, 520], fill=YELLOW)
    for y in range(300, 500, 40):
        d.line([(800, y), (1120, y - 20)], fill=GOLD, width=3)


def restaurant_brands_india(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 360, 420, 540], fill=RED)
    d.rectangle([200, 280, 360, 360], fill=YELLOW)
    d.line([(680, 560), (1120, 560)], fill=GOLD, width=3)
    for i, h in enumerate([80, 140, 200, 260]):
        d.rectangle([720 + i * 55, 560 - h, 770 + i * 55, 560], fill=[BLUE, YELLOW, RED, BLUE][i])


def milkymist_protein(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([140, 260, 240, 520], radius=24, fill=BLUE)
    d.rounded_rectangle([280, 300, 480, 420], radius=12, fill=YELLOW)
    d.rectangle([300, 440, 460, 480], fill=RED)
    d.polygon([(720, 520), (820, 280), (920, 520)], fill=GOLD)
    d.rectangle([980, 320, 1080, 520], fill=RED)


def morbi_ceramic(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 520, 560], fill=BLUE)
    for i in range(4):
        d.rectangle([120 + i * 90, 300, 190 + i * 90, 540], fill=YELLOW if i % 2 else RED)
    d.polygon([(700, 520), (760, 200), (820, 520)], fill=RED)
    d.line([(900, 520), (1100, 360)], fill=GOLD, width=4)
    d.rectangle([950, 380, 1050, 480], outline=BLUE, width=4)


def jupiter_wagons(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 380, 480, 520], fill=RED)
    d.ellipse([140, 500, 200, 560], fill=INK)
    d.ellipse([400, 500, 460, 560], fill=INK)
    d.rectangle([680, 240, 1120, 320], fill=BLUE)
    for i, h in enumerate([120, 200, 280]):
        d.rectangle([720 + i * 90, 560 - h, 780 + i * 90, 560], fill=[YELLOW, RED, GOLD][i])


def iip_september(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([140, 220, 180, 260, 200]):
        x = 100 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, BLUE, YELLOW, BLUE, RED][i])
    d.polygon([(720, 520), (820, 300), (920, 520)], fill=GOLD)
    d.ellipse([980, 360, 1100, 480], fill=YELLOW)


def united_spirits(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([140, 260, 220, 520], radius=20, fill=BLUE)
    d.rounded_rectangle([260, 300, 340, 520], radius=20, fill=RED)
    d.line([(680, 560), (1120, 560)], fill=GOLD, width=3)
    d.rectangle([720, 420, 1080, 480], fill=YELLOW)
    d.rectangle([720, 320, 980, 380], fill=BLUE)


def dr_reddys_vai(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 240, 280, 520], radius=28, fill=BLUE)
    d.rectangle([180, 280, 220, 480], fill=CREAM)
    d.polygon([(700, 520), (780, 280), (860, 520)], fill=RED)
    d.ellipse([920, 340, 1080, 460], outline=GOLD, width=6)
    d.line([(960, 380), (1040, 420)], fill=GOLD, width=5)


def cipla_us_target(d: ImageDraw.ImageDraw) -> None:
    # pill bottle + dollar lane to billion tick
    d.rounded_rectangle([140, 220, 280, 520], radius=30, fill=BLUE)
    d.rectangle([180, 260, 240, 300], fill=CREAM)
    d.ellipse([700, 300, 820, 420], fill=YELLOW)
    d.rectangle([860, 200, 900, 560], fill=RED)
    d.rectangle([940, 280, 980, 560], fill=BLUE)
    d.rectangle([1020, 360, 1060, 560], fill=YELLOW)


def credit_card_spending_decline(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([100, 240, 480, 520], radius=24, fill=BLUE)
    d.rectangle([140, 300, 440, 340], fill=GOLD)
    d.rectangle([140, 380, 380, 420], fill=CREAM)
    for i, h in enumerate([80, 140, 100, 60]):
        x = 640 + i * 85
        d.rectangle([x, 520 - h, x + 55, 520], fill=[RED, BLUE, YELLOW, RED][i])
    d.polygon([(900, 200), (980, 240), (900, 280)], fill=GOLD)


def fiscal_deficit_h1(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 160, 520, 580], fill=BLUE)
    d.polygon([(300, 200), (420, 260), (420, 540), (300, 600), (180, 540), (180, 260)], fill=RED)
    for i, w in enumerate([1180, 1080, 980]):
        d.rectangle([640, 220 + i * 110, w, 280 + i * 110], fill=[YELLOW, RED, BLUE][i])
    d.line([(640, 560), (1180, 560)], fill=GOLD, width=3)


def ioc_lpg_compensation(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 280, 220, 380], fill=YELLOW)
    d.rectangle([240, 320, 480, 520], fill=BLUE)
    d.polygon([(700, 400), (900, 320), (1100, 400), (900, 480)], fill=RED)
    d.line([(720, 360), (1080, 360)], fill=GOLD, width=4)


def ppp_investor_apathy(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(100, 520), (200, 380), (400, 360), (520, 480)], fill=BLUE)
    d.rectangle([640, 280, 720, 560], fill=RED)
    d.rectangle([780, 360, 860, 560], fill=YELLOW)
    d.line([(900, 560), (1150, 560)], fill=GOLD, width=3)
    d.polygon([(950, 560), (1020, 520), (950, 480)], fill=INK)


def au_sfb_data_leak(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 200, 460, 560], radius=28, fill=BLUE)
    d.ellipse([260, 320, 340, 400], fill=CREAM)
    d.rectangle([640, 180, 720, 260], fill=RED)
    d.polygon([(800, 240), (880, 280), (800, 320), (720, 280)], fill=YELLOW)
    d.line([(700, 400), (1120, 400)], fill=GOLD, width=3)
    d.ellipse([980, 420, 1060, 500], outline=RED, width=6)


def banking_reforms_committee(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 160, 500, 580], fill=BLUE)
    for i, h in enumerate([80, 140, 200, 280]):
        d.rectangle([140 + i * 70, 580 - h, 200 + i * 70, 580], fill=[RED, YELLOW, RED, GOLD][i])
    d.polygon([(700, 200), (780, 240), (700, 280), (620, 240)], fill=GOLD)
    d.ellipse([900, 220, 1100, 420], outline=RED, width=8)
    d.line([(950, 320), (1050, 320)], fill=INK, width=4)


def reliance_retail_fmcg(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([100, 220, 420, 560], radius=24, fill=RED)
    d.rectangle([460, 380, 540, 560], fill=BLUE)
    for i, h in enumerate([200, 320, 420]):
        x = 620 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[YELLOW, RED, BLUE][i])
    d.ellipse([980, 260, 1140, 420], fill=GOLD)
    d.line([(680, 560), (1180, 560)], fill=INK, width=2)


def tata_starbucks_local(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 180, 480, 560], radius=32, fill=BLUE)
    d.ellipse([220, 280, 380, 440], fill=CREAM)
    d.rectangle([640, 240, 720, 320], fill=RED)
    d.rectangle([760, 280, 840, 360], fill=YELLOW)
    d.rectangle([880, 320, 960, 400], fill=RED)
    d.polygon([(1050, 480), (1120, 420), (1180, 480)], fill=GOLD)


def jio_q2_post_ipo(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(140, 520), (260, 200), (380, 520)], fill=BLUE)
    d.rectangle([640, 300, 720, 560], fill=RED)
    d.rectangle([760, 240, 840, 560], fill=YELLOW)
    d.rectangle([880, 180, 960, 560], fill=BLUE)
    d.ellipse([1020, 360, 1140, 480], fill=GOLD)
    d.line([(640, 560), (1180, 560)], fill=INK, width=2)


def sun_pharma_assam_eye(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([160, 260, 400, 420], outline=BLUE, width=10)
    d.ellipse([220, 300, 340, 380], fill=RED)
    d.rectangle([640, 200, 720, 520], fill=YELLOW)
    d.polygon([(800, 260), (880, 300), (800, 340)], fill=RED)
    d.line([(700, 400), (1120, 400)], fill=GOLD, width=4)
    d.rectangle([980, 440, 1100, 520], fill=BLUE)


def sebi_cdsl_compliance(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 180, 480, 560], fill=BLUE)
    d.rectangle([140, 220, 440, 520], fill=CREAM)
    for y in range(260, 480, 36):
        d.rectangle([180, y, 400, y + 16], fill=YELLOW if y % 72 else RED)
    d.polygon([(640, 200), (760, 260), (760, 500), (640, 560), (520, 500), (520, 260)], fill=RED)
    d.line([(700, 380), (1100, 380)], fill=GOLD, width=6)


def pnb_credit_card_fees(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 220, 480, 520], radius=24, fill=RED)
    d.rounded_rectangle([160, 280, 440, 460], radius=16, fill=CREAM)
    for i, h in enumerate([80, 140, 200, 280]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, YELLOW, RED, BLUE][i])
    d.polygon([(900, 180), (980, 220), (900, 260)], fill=GOLD)


def gail_gas_ipo(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 280, 320, 480], fill=YELLOW)
    d.rectangle([280, 360, 520, 420], fill=BLUE)
    d.polygon([(640, 520), (720, 420), (900, 400), (1080, 320), (1160, 260)], fill=RED)
    for x in range(680, 1120, 100):
        d.rectangle([x, 440, x + 40, 520], fill=BLUE if x % 200 else YELLOW)


def granules_fda_483(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 160, 420, 580], fill=CREAM, outline=GOLD, width=4)
    for y in range(200, 520, 48):
        d.line([(140, y), (380, y)], fill=INK, width=2)
    d.rectangle([520, 200, 620, 540], fill=RED)
    d.ellipse([700, 300, 900, 500], outline=BLUE, width=8)
    d.line([(760, 360), (840, 440)], fill=RED, width=6)


def capillary_impersonation_fraud(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 200, 360, 560], fill=BLUE)
    d.rectangle([120, 240, 320, 520], fill=CREAM)
    d.rectangle([420, 200, 700, 560], fill=RED)
    d.rectangle([460, 240, 660, 520], fill=YELLOW)
    d.polygon([(820, 280), (1120, 320), (1120, 480), (820, 520)], fill=GOLD)
    d.line([(80, 380), (1180, 380)], fill=INK, width=2)


def main() -> None:
    save("blue-star-ac-demand-october-2026", blue_star_ac)
    save("symphony-overseas-cooling-expansion-october-2026", symphony_overseas)
    save("restaurant-brands-india-qsr-profit-october-2026", restaurant_brands_india)
    save("milkymist-protein-dairy-october-2026", milkymist_protein)
    save("morbi-ceramic-export-shock-october-2026", morbi_ceramic)
    save("jupiter-wagons-railways-order-october-2026", jupiter_wagons)
    save("india-iip-september-slowdown-october-2026", iip_september)
    save("united-spirits-q2-soft-october-2026", united_spirits)
    save("dr-reddys-srikakulam-fda-vai-october-2026", dr_reddys_vai)
    save("adani-vtti-storage-terminals-bid-october-2026", adani_vtti)
    save("tvs-motor-q2-finance-spinoff-october-2026", tvs_spinoff)
    save("cholafin-disbursements-q2-october-2026", cholafin_disb)
    save("info-edge-ceo-succession-december-2026", info_edge_ceo)
    save("jsw-cement-volumes-north-breakeven-october-2026", jsw_cement_north)
    save("nppa-anti-cancer-mrp-list-november-2026", nppa_mrp_list)
    save("radico-khaitan-q2-premium-brands-october-2026", radico_premium)
    save("pvr-inox-record-q2-earnings-october-2026", pvr_inox_q2)
    save("hero-motocorp-q2-profit-october-2026", hero_motocorp_q2)
    save("bandhan-bank-irdai-third-party-hit-october-2026", bandhan_irdai)
    save("jio-platforms-ipo-listing-debut-october-2026", jio_listing_debut)
    save("rbi-rupee-defence-liquidity-squeeze-october-2026", rbi_liquidity_squeeze)
    save("pnb-housing-q2-disbursements-october-2026", pnb_housing)
    save("meesho-q2-loss-narrowing-october-2026", meesho_q2)
    save("piramal-pharma-fy27-guidance-october-2026", piramal_pharma)
    save("hindunilvr-q2-festive-volume-october-2026", hul_volume)
    save("gst-brokerage-fpi-export-clarification-october-2026", gst_brokerage_fpi)
    save("india-overseas-retail-investing-boom-october-2026", overseas_retail)
    save("bpcl-kochi-refinery-maintenance-january-2026", bpcl_kochi)
    save("gst-post-sale-discount-rules-november-2026", gst_post_sale)
    save("mumbai-airport-network-outage-october-2026", mumbai_outage)
    save("united-breweries-premium-beer-q2-october-2026", ub_beer)
    save("supreme-court-cirp-withdrawal-bar-october-2026", sc_cirp)
    save("indiamart-q2-silver-churn-ai-search-october-2026", indiamart_q2)
    save("telcos-6ghz-wifi-outdoor-october-2026", telcos_6ghz)
    save("bajaj-auto-record-q2-exports-ev-october-2026", bajaj_auto_q2)
    save("sbi-life-q2-premium-growth-guidance-october-2026", sbi_life_q2)
    save("star-health-h1-underwriting-profit-october-2026", star_health_h1)
    save("cipla-us-billion-revenue-target-october-2026", cipla_us_target)
    save("dac-defence-acquisition-clearance-october-2026", dac)
    save("agoda-festive-travel-intentional-october-2026", agoda)
    save("paytm-q2-profitability-october-2026", paytm)
    save("mankind-pharma-q2-otc-gap-october-2026", mankind)
    save("transformers-rectifiers-greenfield-capex-october-2026", transformers)
    save("maruti-q2-commodity-costs-october-2026", maruti_q2)
    save("luxury-diwali-mithai-gifting-october-2026", mithai)
    save("ioc-india-shipping-fleet-crude-october-2026", ioc_shipping)
    save("larsen-toubro-q2-infrastructure-october-2026", lt_infra)
    save("redington-iphone-festive-slowdown-october-2026", redington)
    save("india-credit-card-spending-september-decline-october-2026", credit_card_spending_decline)
    save("india-fiscal-deficit-april-september-october-2026", fiscal_deficit_h1)
    save("ioc-q2-lpg-compensation-profit-october-2026", ioc_lpg_compensation)
    save("india-ppp-investor-apathy-october-2026", ppp_investor_apathy)
    save("au-sfb-customer-data-leak-probe-october-2026", au_sfb_data_leak)
    save("india-banking-reforms-committee-october-2026", banking_reforms_committee)
    save("reliance-retail-fmcg-profit-mismatch-october-2026", reliance_retail_fmcg)
    save("tata-starbucks-local-menu-expansion-october-2026", tata_starbucks_local)
    save("jio-platforms-q2-first-results-post-ipo-october-2026", jio_q2_post_ipo)
    save("sun-pharma-assam-eye-drops-plant-halt-october-2026", sun_pharma_assam_eye)
    save("sebi-cdsl-compliance-fine-october-2026", sebi_cdsl_compliance)
    save("pnb-credit-card-fees-november-2026", pnb_credit_card_fees)
    save("gail-gas-ipo-listing-nod-october-2026", gail_gas_ipo)
    save("granules-india-fda-form-483-october-2026", granules_fda_483)
    save("capillary-czech-impersonation-fraud-october-2026", capillary_impersonation_fraud)


if __name__ == "__main__":
    main()
