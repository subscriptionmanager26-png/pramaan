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


def sebi_eki_energy_bar(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 160, 460, 580], fill=BLUE)
    d.polygon([(260, 200), (380, 260), (380, 520), (260, 580), (140, 520), (140, 260)], fill=RED)
    d.line([(640, 220), (1120, 220), (1120, 520), (640, 520), (640, 220)], fill=GOLD, width=4)
    d.line([(680, 280), (1080, 420)], fill=YELLOW, width=8)
    d.ellipse([980, 440, 1060, 520], fill=RED)


def tax_devolution_festive(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([120, 180, 240, 300, 360]):
        x = 120 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, BLUE, YELLOW, RED, BLUE][i])
    d.polygon([(700, 520), (820, 420), (980, 400), (1140, 360)], fill=GOLD)
    d.rectangle([720, 180, 1100, 260], fill=BLUE)
    d.rectangle([720, 300, 1050, 380], fill=RED)


def lpg_under_recovery_dec(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 220, 420, 520], fill=YELLOW)
    d.rectangle([220, 160, 340, 220], fill=RED)
    d.polygon([(640, 540), (720, 380), (860, 380), (940, 540)], fill=BLUE)
    for i, w in enumerate([680, 760, 840, 920]):
        d.rectangle([w, 560 - 40 - i * 50, w + 35, 560], fill=RED if i > 1 else GOLD)


def cci_niel_vodafone(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 200, 480, 560], outline=BLUE, width=10)
    d.rectangle([640, 240, 1180, 320], fill=RED)
    d.rectangle([640, 360, 1100, 440], fill=YELLOW)
    d.polygon([(900, 480), (980, 420), (1060, 480), (980, 540)], fill=BLUE)
    d.line([(200, 380), (400, 380)], fill=GOLD, width=5)


def emirates_navi_resist(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(100, 480), (280, 320), (460, 480)], fill=BLUE)
    d.polygon([(640, 480), (820, 300), (1000, 480)], fill=RED)
    d.line([(540, 400), (640, 400)], fill=GOLD, width=8)
    d.polygon([(1050, 200), (1120, 260), (1080, 340), (1020, 280)], fill=YELLOW)
    d.rectangle([680, 140, 960, 200], fill=YELLOW)


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


def meity_depa_ai(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 180, 480, 560], fill=BLUE)
    for i in range(4):
        d.rectangle([140 + i * 80, 220, 200 + i * 80, 520], fill=[RED, YELLOW, CREAM, RED][i])
    d.ellipse([640, 240, 900, 500], outline=GOLD, width=6)
    d.line([(770, 280), (770, 460)], fill=INK, width=3)
    d.polygon([(720, 340), (820, 300), (920, 340), (820, 380)], fill=YELLOW)


def scotch_tariff_dispute(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 420, 1180, 560], fill=GOLD, width=0)
    for i, h in enumerate([200, 280, 360]):
        d.rectangle([120 + i * 120, 560 - h, 200 + i * 120, 560], fill=[RED, BLUE, YELLOW][i])
    d.rectangle([520, 160, 760, 560], fill=BLUE)
    d.ellipse([600, 280, 680, 360], fill=CREAM)
    d.polygon([(900, 200), (1100, 260), (900, 320)], fill=RED)


def escorts_kubota_tractor(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 380, 520, 520], fill=RED)
    d.ellipse([140, 500, 220, 580], fill=INK)
    d.ellipse([400, 500, 480, 580], fill=INK)
    d.rectangle([260, 300, 420, 400], fill=BLUE)
    for i, h in enumerate([80, 140, 200, 260]):
        x = 620 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[YELLOW, RED, BLUE, YELLOW][i])


def igl_railway_png(d: ImageDraw.ImageDraw) -> None:
    d.line([(80, 520), (1180, 520)], fill=INK, width=4)
    d.rectangle([200, 440, 480, 520], fill=BLUE)
    d.polygon([(520, 520), (620, 420), (720, 520)], fill=RED)
    d.line([(760, 520), (1100, 380)], fill=GOLD, width=5)
    d.ellipse([900, 200, 980, 280], fill=YELLOW)
    d.rectangle([920, 280, 960, 400], fill=BLUE)


def reliance_export_routes(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(720, 520), (820, 420), (920, 520)], fill=BLUE)
    d.line([(80, 520), (680, 520)], fill=GOLD, width=4)
    for i, x in enumerate([700, 820, 940, 1060]):
        d.polygon([(x, 520), (x + 50, 480), (x + 100, 520)], fill=[RED, YELLOW, BLUE, RED][i])
    d.ellipse([120, 280, 280, 440], fill=YELLOW)
    d.rectangle([160, 360, 240, 420], fill=RED)


def corporate_offsite_travel(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 200, 480, 560], fill=BLUE)
    d.polygon([(200, 260), (380, 220), (420, 380), (160, 420)], fill=CREAM)
    for i, h in enumerate([100, 160, 220, 280]):
        x = 620 + i * 80
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.polygon([(900, 180), (980, 240), (900, 300), (820, 240)], fill=GOLD)


def strides_ex_us(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 180, 520, 580], fill=CREAM, outline=GOLD, width=3)
    for y in range(220, 520, 56):
        d.line([(120, y), (480, y)], fill=BLUE, width=3)
    d.rectangle([640, 280, 820, 520], fill=RED)
    d.rectangle([860, 320, 1040, 520], fill=YELLOW)
    d.line([(760, 400), (1180, 400)], fill=GOLD, width=3)
    d.polygon([(900, 360), (980, 400), (900, 440)], fill=BLUE)


def ashok_leyland_mhcv_q2(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 380, 520, 500], fill=RED)
    d.ellipse([140, 480, 220, 560], fill=INK)
    d.ellipse([400, 480, 480, 560], fill=INK)
    d.rectangle([240, 300, 380, 380], fill=BLUE)
    for i, h in enumerate([140, 220, 300, 380]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 65, 560], fill=[YELLOW, RED, BLUE, YELLOW][i])
    d.polygon([(900, 240), (1040, 300), (1040, 380), (900, 440)], fill=GOLD)


def pvr_inox_global_distribution(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 160, 520, 560], fill=BLUE)
    d.rectangle([140, 220, 460, 500], fill=CREAM)
    d.ellipse([240, 300, 360, 420], fill=RED)
    d.polygon([(700, 480), (820, 400), (980, 420), (1100, 520), (860, 560)], fill=YELLOW)
    d.rectangle([600, 180, 1180, 240], fill=RED)
    d.rectangle([600, 280, 1100, 340], fill=BLUE)


def india_us_trade_pact_last_stretch(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 200, 400, 480], outline=BLUE, width=6)
    d.ellipse([180, 260, 340, 420], fill=YELLOW)
    d.rectangle([700, 200, 1100, 560], fill=RED)
    for i, w in enumerate([1100, 1020, 940]):
        d.line([(700, 260 + i * 100), (w, 260 + i * 100)], fill=GOLD, width=4)
        d.polygon([(w, 250 + i * 100), (w + 36, 270 + i * 100), (w, 290 + i * 100)], fill=BLUE)
    d.rectangle([80, 520, 1180, 580], fill=BLUE)
    d.rectangle([200, 536, 500, 564], fill=YELLOW)


def ramkrishna_forgings_cv(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 360, 520, 480], fill=RED)
    d.ellipse([160, 460, 240, 540], fill=INK)
    d.ellipse([400, 460, 480, 540], fill=INK)
    d.polygon([(280, 280), (360, 240), (440, 280), (360, 320)], fill=BLUE)
    for i, h in enumerate([120, 200, 280]):
        x = 640 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[YELLOW, RED, BLUE][i])


def affle_perion_acquisition(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 200, 420, 560], fill=BLUE)
    d.polygon([(200, 260), (320, 220), (360, 340), (240, 380)], fill=YELLOW)
    d.rectangle([480, 240, 820, 520], fill=RED)
    d.ellipse([540, 300, 760, 460], outline=GOLD, width=5)
    for i, x in enumerate([860, 960, 1060]):
        d.polygon([(x, 520), (x + 60, 460), (x + 120, 520)], fill=[BLUE, RED, YELLOW][i])


def maruti_west_asia_shipping(d: ImageDraw.ImageDraw) -> None:
    d.line([(80, 520), (1180, 520)], fill=GOLD, width=4)
    d.polygon([(720, 520), (860, 420), (1000, 520)], fill=BLUE)
    d.polygon([(300, 520), (420, 480), (540, 520), (420, 560)], fill=RED)
    d.line([(540, 520), (720, 460)], fill=INK, width=3)
    d.polygon([(900, 200), (980, 260), (900, 320), (820, 260)], fill=YELLOW)
    d.rectangle([120, 280, 200, 360], fill=GOLD)


def power_grid_q2_dividend(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([120, 200, 280, 360]):
        x = 100 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.line([(80, 560), (520, 560)], fill=INK, width=2)
    d.polygon([(640, 200), (760, 260), (880, 200), (1000, 260), (880, 320), (760, 260)], fill=GOLD)
    d.rectangle([700, 380, 920, 560], fill=BLUE)
    d.line([(700, 440), (920, 440)], fill=CREAM, width=8)


def lic_housing_loan_rates(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 280, 480, 560], fill=BLUE)
    d.polygon([(180, 320), (420, 320), (420, 520), (180, 520)], fill=CREAM)
    for i, h in enumerate([80, 140, 220, 300]):
        x = 620 + i * 80
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, RED, BLUE][i])
    d.polygon([(980, 240), (1120, 300), (980, 360), (840, 300)], fill=GOLD)


def coal_india_power_supply(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 420, 520, 560], fill=INK)
    for i, h in enumerate([80, 140, 200, 260, 320]):
        x = 120 + i * 70
        d.rectangle([x, 420 - h, x + 50, 420], fill=[RED, YELLOW, BLUE, RED, YELLOW][i])
    d.line([(560, 560), (1180, 560)], fill=GOLD, width=4)
    for i, x in enumerate([620, 760, 900, 1040]):
        d.rectangle([x, 480, x + 80, 560], fill=BLUE)
        d.polygon([(x + 40, 440), (x + 100, 480), (x + 40, 520)], fill=RED)
    d.ellipse([900, 180, 1100, 380], outline=YELLOW, width=6)


def festive_auto_wholesale(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 380, 480, 520], fill=RED)
    d.ellipse([140, 500, 220, 580], fill=INK)
    d.ellipse([360, 500, 440, 580], fill=INK)
    d.rectangle([220, 320, 360, 400], fill=BLUE)
    for i, h in enumerate([100, 180, 260, 340, 420]):
        x = 560 + i * 70
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, RED, BLUE, YELLOW, RED][i])
    d.polygon([(980, 200), (1120, 260), (1120, 340), (980, 400), (840, 340), (840, 260)], fill=GOLD)


def irdai_scale_regulation(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([80, 160, 240, 320, 400]):
        w = 100 + i * 40
        x = 80 + i * 55
        d.rectangle([x, 560 - h, x + w, 560], fill=[BLUE, RED, YELLOW, BLUE, RED][i % 5])
    d.line([(80, 560), (1180, 560)], fill=INK, width=2)
    d.rectangle([720, 160, 1120, 520], fill=CREAM, outline=GOLD, width=4)
    d.line([(720, 340), (1120, 340)], fill=GOLD, width=0)
    d.polygon([(820, 200), (1020, 200), (1020, 280), (820, 280)], fill=BLUE)
    d.polygon([(820, 380), (1020, 380), (1020, 460), (820, 460)], fill=RED)


def muthoot_gold_loan(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 200, 420, 520], fill=GOLD)
    d.rectangle([160, 240, 380, 480], fill=YELLOW)
    d.rectangle([520, 280, 1120, 560], fill=CREAM, outline=BLUE, width=4)
    for i, h in enumerate([100, 180, 260, 340]):
        x = 560 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, RED, YELLOW][i])


def ambuja_cement_capex(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(160, 520), (280, 240), (400, 520)], fill=RED)
    d.rectangle([240, 320, 320, 520], fill=GOLD)
    for i, h in enumerate([100, 180, 260, 340]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, YELLOW, BLUE, RED][i])
    d.line([(620, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(1050, 200), (1120, 240), (1050, 280)], fill=GOLD)


def residential_sales_value(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 480, 520], fill=BLUE)
    for i in range(4):
        d.rectangle([120 + i * 90, 320 + i * 30, 190 + i * 90, 520], fill=CREAM)
    for i, h in enumerate([140, 220, 220, 300]):
        x = 620 + i * 75
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, RED, YELLOW, YELLOW][i])
    d.line([(600, 560), (1150, 560)], fill=INK, width=2)
    d.ellipse([980, 160, 1100, 240], fill=GOLD)


def reliance_independence_biscuits(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([100, 220, 420, 540], radius=20, fill=BLUE)
    for i, y in enumerate([260, 320, 380, 440]):
        d.rectangle([130, y, 390, y + 40], fill=[CREAM, YELLOW, RED, CREAM][i])
    for i, p in enumerate([5, 10, 40, 125]):
        d.rectangle([560 + i * 70, 520 - p * 3, 610 + i * 70, 560], fill=[RED, BLUE, YELLOW, GOLD][i])
    d.line([(540, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(980, 180), (1080, 220), (980, 260)], fill=GOLD)


def motherson_wiring_content(d: ImageDraw.ImageDraw) -> None:
    d.line([(120, 400), (480, 280), (480, 520), (120, 400)], fill=RED, width=6)
    d.line([(140, 420), (460, 300)], fill=GOLD, width=4)
    d.line([(160, 440), (440, 340)], fill=BLUE, width=4)
    d.rectangle([520, 260, 620, 560], fill=YELLOW)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 680 + i * 80
        d.rectangle([x, 560 - h, x + 50, 560], fill=[BLUE, RED, BLUE, YELLOW][i])
    d.ellipse([1020, 180, 1140, 260], fill=RED)


def man_infra_epc_orders(d: ImageDraw.ImageDraw) -> None:
    # tower silhouette + port reclamation blocks
    d.rectangle([120, 180, 420, 560], fill=BLUE)
    for y in range(220, 520, 70):
        d.rectangle([150, y, 390, y + 40], fill=CREAM if y % 140 else YELLOW)
    d.polygon([(640, 520), (720, 420), (900, 400), (1080, 420), (1160, 520)], fill=RED)
    d.line([(680, 560), (1120, 560)], fill=GOLD, width=4)
    for i, h in enumerate([100, 180, 260]):
        x = 700 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[YELLOW, BLUE, RED][i])


def trident_textile_capex(d: ImageDraw.ImageDraw) -> None:
    # fabric roll + stacked capex bars
    d.ellipse([140, 280, 340, 520], outline=RED, width=8)
    d.rectangle([180, 320, 300, 480], fill=BLUE)
    for i, h in enumerate([120, 200, 280, 360, 440]):
        x = 620 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, BLUE, YELLOW, RED, GOLD][i])
    d.line([(600, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(980, 180), (1120, 240), (980, 300)], fill=GOLD)


def medanta_hospital_volumes(d: ImageDraw.ImageDraw) -> None:
    # hospital cross + rising occupancy blocks
    d.rectangle([160, 220, 420, 520], fill=BLUE)
    d.rectangle([260, 160, 320, 560], fill=RED)
    d.rectangle([180, 340, 400, 400], fill=RED)
    for i, h in enumerate([140, 220, 300, 380]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, BLUE, RED, GOLD][i])
    d.ellipse([1040, 200, 1160, 320], outline=GOLD, width=6)


def happiest_minds_itc_merger(d: ImageDraw.ImageDraw) -> None:
    # two panels merging + neural mesh
    d.rectangle([80, 200, 520, 560], fill=BLUE)
    d.rectangle([640, 200, 1080, 560], fill=RED)
    d.polygon([(520, 280), (640, 360), (520, 440)], fill=YELLOW)
    for y in range(260, 500, 40):
        d.line([(120, y), (480, y + 20)], fill=GOLD, width=2)
        d.line([(680, y + 20), (1040, y)], fill=GOLD, width=2)
    d.ellipse([560, 320, 600, 360], fill=CREAM)


def nlmc_land(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 480, 560], fill=BLUE)
    for i in range(3):
        d.rectangle([130 + i * 100, 320 + i * 40, 210 + i * 100, 560], fill=CREAM)
    for i, h in enumerate([100, 180, 260, 340]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE, GOLD][i])
    d.polygon([(980, 200), (1120, 260), (980, 320)], fill=RED)


def stockal_fraud(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 240, 360, 520], radius=20, fill=BLUE)
    d.rectangle([160, 300, 320, 380], fill=CREAM)
    d.line([(480, 400), (720, 400)], fill=GOLD, width=5)
    d.polygon([(720, 400), (780, 360), (780, 440)], fill=RED)
    for i, h in enumerate([40, 80, 120]):
        x = 820 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[YELLOW, RED, BLUE][i])
    d.line([(720, 400), (820, 520)], fill=INK, width=3)


def himachal_freeze(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 200, 460, 560], fill=BLUE)
    d.rectangle([200, 280, 380, 360], fill=CREAM)
    d.rectangle([640, 300, 1120, 380], fill=YELLOW)
    d.rectangle([640, 420, 900, 500], fill=RED)
    d.ellipse([980, 400, 1100, 520], outline=GOLD, width=6)
    d.line([(700, 340), (1050, 340)], fill=INK, width=2)


def kotak_deutsche(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 200, 480, 560], fill=BLUE)
    d.rectangle([520, 240, 620, 520], fill=GOLD)
    d.rectangle([660, 200, 1180, 560], fill=RED)
    d.ellipse([300, 320, 420, 440], fill=YELLOW)
    d.line([(700, 380), (1100, 380)], fill=CREAM, width=12)
    for x in range(720, 1080, 80):
        d.rectangle([x, 420, x + 40, 520], fill=BLUE if x % 160 else YELLOW)


def household_credit(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 400, 1180, 560], fill=BLUE)
    for i, h in enumerate([180, 240, 300, 360]):
        x = 140 + i * 120
        d.rectangle([x, 560 - h, x + 80, 560], fill=[RED, YELLOW, RED, GOLD][i])
    d.polygon([(720, 180), (900, 140), (1080, 180), (1080, 360), (720, 360)], fill=RED)
    d.line([(720, 270), (1080, 270)], fill=CREAM, width=6)


def page_industries(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 260, 420, 520], fill=RED)
    d.rectangle([460, 300, 560, 520], fill=GOLD)
    d.rectangle([600, 220, 900, 520], fill=BLUE)
    d.polygon([(980, 480), (1120, 400), (1120, 560)], fill=YELLOW)
    d.line([(140, 340), (380, 340)], fill=CREAM, width=8)
    d.line([(140, 420), (380, 420)], fill=CREAM, width=8)


def festive_dhanteras_online(d: ImageDraw.ImageDraw) -> None:
    # QR kirana tile + rising festive order bars + gold coin motif
    d.rounded_rectangle([90, 300, 270, 540], radius=22, fill=BLUE)
    d.rectangle([120, 340, 240, 500], fill=CREAM)
    for row in range(5):
        for col in range(4):
            if (row + col) % 2 == 0:
                d.rectangle(
                    [130 + col * 26, 350 + row * 26, 148 + col * 26, 368 + row * 26],
                    fill=INK,
                )
    d.ellipse([680, 220, 780, 320], fill=YELLOW)
    d.ellipse([740, 260, 860, 360], fill=GOLD)
    for i, h in enumerate([140, 260, 380, 500]):
        x = 900 + i * 58
        d.rectangle([x, 560 - h, x + 44, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.polygon([(520, 480), (620, 420), (720, 480), (720, 540), (520, 540)], fill=RED)


def ntpc_capacity(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(200, 520), (280, 200), (360, 520)], fill=RED)
    d.rectangle([420, 280, 520, 520], fill=INK)
    d.polygon([(540, 520), (620, 240), (700, 520)], fill=BLUE)
    d.ellipse([820, 360, 920, 460], fill=YELLOW)
    d.rectangle([960, 300, 1140, 520], fill=RED)
    for y in range(320, 500, 40):
        d.line([(980, y), (1120, y)], fill=GOLD, width=2)


def pnb_canara_fd(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 220, 420, 560], fill=RED)
    d.rectangle([460, 220, 780, 560], fill=BLUE)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 820 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[YELLOW, RED, BLUE, GOLD][i])
    d.line([(80, 560), (1180, 560)], fill=INK, width=2)


def vmart_q2_loss(d: ImageDraw.ImageDraw) -> None:
    # price tag up, margin bar down
    d.polygon([(140, 240), (240, 200), (340, 240), (340, 480), (140, 480)], fill=YELLOW)
    d.line([(240, 280), (240, 420)], fill=RED, width=8)
    d.rectangle([520, 320, 1120, 380], fill=BLUE)
    d.rectangle([520, 420, 900, 480], fill=RED)
    for i, h in enumerate([320, 260, 200]):
        x = 700 + i * 100
        d.rectangle([x, 560 - h, x + 60, 560], fill=[BLUE, YELLOW, RED][i])


def india_pmi_october(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 460, 520], fill=BLUE)
    d.polygon([(280, 300), (380, 340), (380, 480), (280, 520), (180, 480), (180, 340)], fill=RED)
    d.rectangle([540, 360, 720, 560], fill=YELLOW)
    d.rectangle([760, 420, 940, 560], fill=CREAM, outline=RED, width=4)
    for i, h in enumerate([180, 120]):
        x = 980 + i * 90
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, RED][i])
    d.line([(520, 560), (1180, 560)], fill=INK, width=2)


def igl_expense_squeeze(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 300, 340, 500], outline=BLUE, width=8)
    d.line([(240, 350), (240, 450)], fill=RED, width=12)
    d.rectangle([520, 200, 1120, 260], fill=YELLOW)
    d.rectangle([520, 320, 1050, 380], fill=RED)
    d.rectangle([520, 440, 900, 500], fill=BLUE)
    d.line([(480, 230), (1180, 230)], fill=GOLD, width=3)


def capillary_impersonation_fraud(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 200, 360, 560], fill=BLUE)
    d.rectangle([120, 240, 320, 520], fill=CREAM)
    d.rectangle([420, 200, 700, 560], fill=RED)
    d.rectangle([460, 240, 660, 520], fill=YELLOW)
    d.polygon([(820, 280), (1120, 320), (1120, 480), (820, 520)], fill=GOLD)
    d.line([(80, 380), (1180, 380)], fill=INK, width=2)


def titan_q2_jewellery(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 260, 480, 540], fill=BLUE)
    d.ellipse([200, 320, 380, 480], fill=YELLOW)
    for i, h in enumerate([100, 180, 260]):
        x = 640 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, GOLD, RED][i])
    d.polygon([(980, 220), (1120, 280), (980, 340)], fill=BLUE)


def maharashtra_atf_vat_extension(d: ImageDraw.ImageDraw) -> None:
    """Jet fuel tax relief extended; lower VAT bars."""
    d.rounded_rectangle([100, 280, 460, 520], radius=20, fill=BLUE)
    d.ellipse([260, 340, 300, 380], fill=YELLOW)
    d.line([(500, 400), (620, 400)], fill=GOLD, width=5)
    d.polygon([(80, 180), (200, 140), (200, 260)], fill=RED)
    for i, h in enumerate([280, 220, 160]):
        x = 680 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[YELLOW, BLUE, RED][i])
    d.polygon([(1050, 200), (1140, 240), (1050, 280)], fill=GOLD)


def ongc_vedanta_cambay(d: ImageDraw.ImageDraw) -> None:
    """Offshore block operatorship shifts after court."""
    d.rectangle([120, 320, 520, 560], fill=BLUE)
    d.ellipse([220, 200, 420, 320], fill=YELLOW)
    d.line([(140, 400), (500, 400)], fill=CREAM, width=3)
    d.line([(680, 280), (1150, 280)], fill=GOLD, width=4)
    d.polygon([(900, 360), (1100, 320), (1100, 480), (900, 520)], fill=RED)
    d.rectangle([720, 320, 780, 520], fill=INK)


def liquor_excise_price_push(d: ImageDraw.ImageDraw) -> None:
    """State excise gates on rising shelf prices."""
    for i in range(4):
        d.rectangle([140 + i * 30, 380 - i * 50, 220 + i * 30, 540], fill=[RED, BLUE, YELLOW, RED][i])
    d.rectangle([520, 200, 620, 560], fill=INK)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 720 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=GOLD if i % 2 else BLUE)
    d.polygon([(400, 220), (480, 260), (400, 300)], fill=GOLD)


def titan_jewellery_buyer_push(d: ImageDraw.ImageDraw) -> None:
    """More footprints into larger tickets."""
    d.rectangle([100, 260, 440, 520], fill=BLUE)
    d.ellipse([180, 340, 240, 400], fill=GOLD)
    d.ellipse([320, 320, 400, 400], fill=GOLD)
    d.polygon([(500, 300), (540, 280), (540, 520), (500, 540)], fill=YELLOW)
    for i, h in enumerate([80, 140, 220, 300]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, RED, BLUE][i])


def lg_appliances_q2(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 200, 420, 520], radius=16, fill=BLUE)
    for i in range(5):
        d.line([(140, 240 + i * 50), (400, 240 + i * 50)], fill=CREAM, width=2)
    for i, h in enumerate([120, 200, 280]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE][i])
    d.polygon([(980, 180), (1120, 240), (980, 300)], fill=GOLD)


def bikaji_snacks_margin(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 280, 440, 520], radius=20, fill=RED)
    for i, h in enumerate([200, 320, 400]):
        x = 560 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[BLUE, YELLOW, BLUE][i])
    d.line([(560, 420), (980, 520)], fill=GOLD, width=5)
    d.ellipse([1020, 360, 1120, 460], outline=RED, width=6)


def adani_ports_evos(d: ImageDraw.ImageDraw) -> None:
    for i in range(4):
        d.ellipse([120 + i * 90, 420, 200 + i * 90, 560], fill=BLUE if i % 2 else RED)
        d.rectangle([150 + i * 90, 360, 170 + i * 90, 430], fill=GOLD)
    d.arc([680, 160, 1160, 520], 220, 340, fill=YELLOW, width=8)
    d.line([(720, 500), (900, 280), (1080, 240)], fill=GOLD, width=4)
    d.rectangle([700, 120, 780, 180], fill=RED)


def emami_d2c(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([100, 220, 420, 560], radius=24, fill=RED)
    d.rounded_rectangle([460, 220, 780, 560], radius=24, fill=BLUE)
    d.line([(420, 390), (460, 390)], fill=GOLD, width=6)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 820 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[YELLOW, RED, BLUE, GOLD][i])


def britannia_festive_biscuits(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 280, 440, 520], radius=20, fill=BLUE)
    for i, y in enumerate([320, 380, 440]):
        d.rectangle([150, y, 410, y + 36], fill=[CREAM, YELLOW, RED][i])
    for i, h in enumerate([140, 240, 340, 440]):
        x = 560 + i * 70
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.polygon([(980, 200), (1120, 260), (980, 320)], fill=GOLD)


def mahindra_suv_q2(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 320, 500, 520], radius=24, fill=BLUE)
    d.ellipse([160, 360, 240, 440], fill=CREAM)
    d.ellipse([380, 360, 460, 440], fill=CREAM)
    d.polygon([(540, 520), (620, 420), (760, 400), (920, 440), (1000, 520)], fill=RED)
    for i, h in enumerate([100, 180, 260]):
        x = 640 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[YELLOW, RED, BLUE][i])


def makemytrip_quick_ride(d: ImageDraw.ImageDraw) -> None:
    """Shared commute lanes merging into one mobility stack."""
    d.rounded_rectangle([100, 260, 480, 540], radius=28, fill=BLUE)
    for y, col in zip([300, 380, 460], [RED, YELLOW, RED]):
        d.rectangle([140, y, 440, y + 40], fill=col)
    d.line([(520, 400), (560, 400)], fill=GOLD, width=8)
    d.polygon([(560, 400), (620, 340), (620, 460)], fill=GOLD)
    d.rounded_rectangle([640, 220, 1140, 580], radius=24, fill=YELLOW)
    for i, h in enumerate([160, 260, 360]):
        x = 700 + i * 90
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, BLUE, RED][i])


def gujarat_energy_cbg(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 280, 340, 480], fill=YELLOW)
    d.rectangle([360, 360, 520, 540], fill=BLUE)
    d.rectangle([640, 300, 720, 560], fill=RED)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 760 + i * 80
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, YELLOW, RED, GOLD][i])
    d.line([(680, 560), (1180, 560)], fill=INK, width=2)


def tpg_arka_fincap(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(160, 520), (160, 320), (280, 240), (400, 320), (400, 520)], fill=RED)
    d.rectangle([440, 360, 520, 520], fill=BLUE)
    d.rounded_rectangle([100, 280, 320, 480], radius=24, fill=BLUE)
    for i, h in enumerate([100, 180, 260, 340]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, RED, BLUE, GOLD][i])
    d.line([(900, 400), (1120, 400)], fill=GOLD, width=4)


def ongc_venezuela(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 320, 360, 520], fill=YELLOW)
    d.rectangle([200, 280, 280, 320], fill=RED)
    d.polygon([(640, 520), (760, 420), (900, 400), (1080, 360), (1160, 280)], fill=BLUE)
    d.ellipse([900, 200, 1100, 360], fill=RED)
    d.line([(360, 420), (640, 380)], fill=GOLD, width=5)
    d.rectangle([980, 400, 1080, 520], fill=BLUE)


def nse_digital_gold_egr(d: ImageDraw.ImageDraw) -> None:
    """Vaulted bar dematerialised into exchange receipt tiles."""
    d.rounded_rectangle([100, 280, 260, 520], radius=16, fill=YELLOW)
    d.rectangle([140, 320, 220, 480], fill=GOLD)
    d.polygon([(320, 520), (420, 360), (520, 520)], fill=BLUE)
    for i in range(4):
        x = 640 + i * 95
        d.rectangle([x, 220 + i * 30, x + 70, 520], fill=[RED, BLUE, YELLOW, RED][i])
    d.line([(520, 420), (640, 420)], fill=GOLD, width=5)
    d.ellipse([980, 300, 1140, 460], outline=INK, width=4)


def railways_schedule_redress(d: ImageDraw.ImageDraw) -> None:
    """Station clock vs early-departing train."""
    d.rectangle([120, 220, 460, 560], fill=BLUE)
    d.ellipse([240, 280, 380, 420], fill=CREAM)
    d.line([(240, 350), (380, 350)], fill=RED, width=6)
    d.line([(310, 280), (310, 420)], fill=INK, width=4)
    d.polygon([(720, 520), (900, 420), (1080, 520)], fill=RED)
    d.ellipse([880, 400, 1020, 480], fill=YELLOW)
    d.polygon([(1040, 440), (1160, 400), (1160, 480)], fill=GOLD)


def diwali_gift_tax(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 240, 420, 540], radius=24, fill=RED)
    d.rectangle([260, 240, 280, 540], fill=GOLD)
    d.rectangle([120, 360, 420, 400], fill=GOLD)
    for i, h in enumerate([60, 120, 200, 280]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, YELLOW, RED, BLUE][i])
    d.line([(600, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(980, 200), (1120, 260), (980, 320)], fill=GOLD)


def tata_chemicals_soda(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 300, 340, 500], fill=BLUE)
    d.rectangle([200, 260, 280, 320], fill=YELLOW)
    for i, h in enumerate([280, 220, 160, 100, 60]):
        x = 560 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=GOLD if i < 2 else RED)
    d.polygon([(900, 520), (980, 360), (1060, 520)], fill=RED)
    d.line([(720, 400), (1080, 400)], fill=GOLD, width=4)


def aster_dm_merger(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([200, 220, 420, 520], fill=BLUE)
    d.rectangle([300, 160, 320, 560], fill=RED)
    d.rectangle([220, 340, 400, 400], fill=RED)
    for i, h in enumerate([140, 220, 300, 380]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, BLUE, RED, GOLD][i])
    d.polygon([(520, 400), (600, 360), (600, 440)], fill=GOLD)


def domestic_air_soft(d: ImageDraw.ImageDraw) -> None:
    """Fewer passenger chevrons, rising fare steps."""
    d.polygon([(120, 200), (460, 160), (500, 500), (80, 540)], fill=BLUE)
    for i, w in enumerate([280, 220, 160, 100]):
        d.polygon([(200 + i * 35, 520 - w), (250 + i * 35, 520 - w - 40), (300 + i * 35, 520 - w)], fill=GOLD)
    d.rectangle([620, 260, 1180, 520], fill=RED)
    for i, h in enumerate([320, 240, 180, 140, 120]):
        x = 660 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, GOLD, BLUE, YELLOW, RED][i])


def airtel_q2_network(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 200, 200, 560], fill=BLUE)
    d.polygon([(160, 200), (220, 120), (280, 200)], fill=RED)
    for i, h in enumerate([80, 160, 240, 320]):
        x = 640 + i * 80
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, RED, BLUE, YELLOW][i])
    d.line([(720, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(980, 220), (1080, 260), (980, 300)], fill=GOLD)


def airtel_299_return(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([100, 240, 420, 520], radius=24, fill=BLUE)
    d.rectangle([160, 300, 360, 360], fill=YELLOW)
    d.rectangle([160, 400, 300, 440], fill=CREAM)
    for i in range(3):
        d.polygon([(700 + i * 120, 520), (760 + i * 120, 420), (820 + i * 120, 520)], fill=[RED, YELLOW, BLUE][i])
    d.line([(680, 520), (1150, 520)], fill=GOLD, width=3)


def medical_devices_pli(d: ImageDraw.ImageDraw) -> None:
    """MRI silhouette; component pipeline."""
    d.rounded_rectangle([100, 220, 460, 540], radius=24, fill=BLUE)
    d.ellipse([180, 300, 380, 480], outline=GOLD, width=6)
    d.rectangle([240, 360, 320, 420], fill=YELLOW)
    d.line([(460, 380), (640, 380)], fill=GOLD, width=4)
    for i, h in enumerate([60, 100, 140, 180]):
        x = 680 + i * 90
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.polygon([(1040, 240), (1140, 320), (1040, 400)], fill=GOLD)


def spicejet_winter_cancel(d: ImageDraw.ImageDraw) -> None:
    """Thin schedule bars vs wide filed timetable; jet motif."""
    d.polygon([(140, 220), (420, 180), (480, 420), (120, 480)], fill=RED)
    for i, h in enumerate([80, 80, 80, 80, 80, 80, 80, 280]):
        x = 560 + i * 70
        d.rectangle([x, 560 - h, x + 45, 560], fill=BLUE if h < 120 else YELLOW)
    d.line([(560, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(900, 200), (1080, 260), (900, 320)], fill=GOLD)


def indigo_saudi_suspension(d: ImageDraw.ImageDraw) -> None:
    """Gulf route arc with break; grounded jet silhouette."""
    d.arc([120, 180, 520, 560], 300, 60, fill=GOLD, width=5)
    d.line([(340, 340), (380, 380)], fill=RED, width=8)
    d.polygon([(140, 420), (360, 360), (400, 480), (160, 520)], fill=BLUE)
    d.rectangle([620, 240, 1140, 280], fill=YELLOW)
    d.rectangle([620, 340, 980, 380], outline=RED, width=4)
    d.line([(980, 360), (1100, 360)], fill=RED, width=6)
    for i in range(4):
        d.ellipse([700 + i * 100, 420, 760 + i * 100, 480], outline=BLUE, width=3)


def cochin_shipyard_repair_mix(d: ImageDraw.ImageDraw) -> None:
    """Dry dock repair blocks vs hull scaffold; split earnings."""
    d.rounded_rectangle([100, 280, 420, 540], radius=16, fill=BLUE)
    d.rectangle([160, 360, 360, 500], fill=YELLOW)
    d.line([(260, 300), (260, 540)], fill=GOLD, width=4)
    d.polygon([(520, 220), (700, 280), (680, 520), (500, 480)], outline=RED, width=5)
    d.line([(590, 260), (620, 500)], fill=RED, width=6)
    for i, h in enumerate([200, 320]):
        x = 760 + i * 120
        d.rectangle([x, 560 - h, x + 80, 560], fill=[YELLOW, BLUE][i])
    d.line([(680, 560), (1180, 560)], fill=INK, width=2)


def jyoti_structures_guarantees(d: ImageDraw.ImageDraw) -> None:
    """Transmission tower; unlocked guarantee scroll."""
    d.polygon([(200, 520), (240, 200), (280, 520)], fill=BLUE)
    d.line([(160, 360), (320, 360), (280, 120), (160, 360)], fill=GOLD, width=4)
    d.rounded_rectangle([620, 240, 900, 480], radius=12, fill=YELLOW)
    d.line([(680, 300), (840, 300)], fill=INK, width=3)
    d.line([(680, 360), (840, 360)], fill=INK, width=3)
    d.polygon([(960, 260), (1040, 320), (960, 380)], fill=RED)
    d.arc([1040, 280, 1140, 420], 270, 90, fill=GOLD, width=5)


def bajaj_finance_qip(d: ImageDraw.ImageDraw) -> None:
    """Institutional bid stacks; rupee block at floor price."""
    for i, h in enumerate([100, 160, 220, 280, 340]):
        x = 120 + i * 80
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, RED, YELLOW, BLUE, RED][i])
    d.rounded_rectangle([640, 200, 1120, 480], radius=20, fill=RED)
    d.rectangle([700, 280, 1060, 340], fill=GOLD)
    d.rectangle([700, 380, 980, 440], fill=YELLOW)
    d.ellipse([980, 360, 1060, 440], fill=BLUE)
    d.polygon([(600, 400), (640, 360), (640, 440)], fill=GOLD)


def bajaj_finance_qip_allotment(d: ImageDraw.ImageDraw) -> None:
    """Filled bars vs dashed floor line; capital funnel."""
    d.line([(80, 420), (1180, 420)], fill=GOLD, width=3)
    for i, h in enumerate([260, 300, 340, 380]):
        x = 140 + i * 100
        d.rectangle([x, 420 - h, x + 70, 420], fill=[RED, BLUE, YELLOW, RED][i])
    d.polygon([(700, 180), (900, 140), (1100, 180), (1100, 520), (700, 520)], fill=BLUE)
    d.polygon([(780, 220), (1020, 260), (1020, 480), (780, 440)], fill=YELLOW)
    d.ellipse([860, 300, 940, 380], fill=RED)


def india_bulk_scotch_162_duty(d: ImageDraw.ImageDraw) -> None:
    """Tanker left; climbing duty steps right."""
    d.ellipse([120, 320, 400, 560], fill=BLUE)
    d.rectangle([200, 380, 320, 520], fill=CREAM)
    for i, h in enumerate([160, 220, 280, 340, 400]):
        x = 620 + i * 100
        d.rectangle([x, 560 - h, x + 72, 560], fill=[RED, YELLOW, RED, BLUE, YELLOW][i])
    d.line([(600, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(520, 260), (600, 220), (680, 260), (640, 320)], fill=GOLD)


def india_defence_capex_budget_ask(d: ImageDraw.ImageDraw) -> None:
    """Rising procurement bars beside shield chevron."""
    d.polygon([(280, 180), (360, 140), (440, 180), (400, 520), (320, 520)], fill=RED)
    d.ellipse([310, 240, 410, 340], fill=YELLOW)
    for i, h in enumerate([140, 200, 260, 320, 380]):
        x = 640 + i * 95
        d.rectangle([x, 560 - h, x + 68, 560], fill=[BLUE, RED, YELLOW, BLUE, RED][i])
    d.line([(620, 560), (1180, 560)], fill=GOLD, width=3)


def go_digit_gift_city_ifsca(d: ImageDraw.ImageDraw) -> None:
    """IFSC tower motif; shield over policy gate."""
    d.polygon([(200, 180), (280, 140), (360, 180), (360, 520), (200, 520)], fill=BLUE)
    for y in range(220, 480, 60):
        d.rectangle([220, y, 340, y + 28], fill=CREAM)
    d.polygon([(700, 260), (820, 200), (940, 260), (940, 480), (700, 480)], fill=RED)
    d.ellipse([760, 300, 880, 420], fill=YELLOW)
    d.line([(600, 400), (700, 360)], fill=GOLD, width=4)
    d.polygon([(1040, 320), (1100, 380), (1040, 440), (980, 380)], fill=GOLD)


def india_refinery_throughput_october(d: ImageDraw.ImageDraw) -> None:
    """Refinery stack left; rising crude bars right."""
    d.rectangle([100, 200, 220, 560], fill=BLUE)
    d.rectangle([240, 260, 360, 560], fill=RED)
    d.ellipse([160, 160, 300, 240], fill=YELLOW)
    d.rectangle([400, 320, 480, 560], fill=BLUE)
    for i, h in enumerate([180, 240, 300, 360, 420, 480]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, YELLOW, RED, BLUE, YELLOW][i])
    d.line([(620, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(520, 400), (600, 360), (600, 440)], fill=GOLD)


def coal_india_rare_earth_magnet_loi(d: ImageDraw.ImageDraw) -> None:
    """Magnet horseshoe; order blocks rising."""
    d.arc([80, 220, 400, 540], 200, 340, fill=RED, width=28)
    d.arc([80, 220, 400, 540], 20, 160, fill=BLUE, width=28)
    d.rectangle([320, 280, 420, 500], fill=GOLD)
    for i, h in enumerate([120, 180, 240, 300, 360]):
        x = 640 + i * 95
        d.rectangle([x, 560 - h, x + 70, 560], fill=[BLUE, YELLOW, RED, BLUE, YELLOW][i])
    d.polygon([(560, 200), (620, 160), (680, 200), (680, 360), (560, 360)], fill=RED)


def ashoka_diriyah_cancel(d: ImageDraw.ImageDraw) -> None:
    """Construction scaffold; pause gate over chevrons."""
    d.rectangle([120, 180, 480, 560], outline=BLUE, width=6)
    for y in range(200, 540, 80):
        d.line([(140, y), (460, y)], fill=GOLD, width=2)
    for x in range(180, 440, 80):
        d.line([(x, 200), (x, 520)], fill=GOLD, width=2)
    d.rectangle([700, 280, 900, 480], fill=RED)
    d.line([(760, 340), (840, 420)], fill=CREAM, width=14)
    d.line([(840, 340), (760, 420)], fill=CREAM, width=14)
    d.polygon([(980, 400), (1040, 360), (1100, 400), (1100, 520), (980, 520)], fill=YELLOW)


def india_upi_merchant_fee_open(d: ImageDraw.ImageDraw) -> None:
    """QR tile left; question-mark fee ladder right."""
    d.rectangle([120, 220, 420, 520], fill=BLUE)
    for r in range(4):
        for c in range(4):
            if (r + c) % 2 == 0:
                d.rectangle([140 + c * 65, 240 + r * 65, 200 + c * 65, 300 + r * 65], fill=CREAM)
    d.rectangle([640, 280, 720, 360], fill=YELLOW)
    d.rectangle([800, 240, 880, 320], fill=RED)
    for i, h in enumerate([100, 160, 220, 280]):
        x = 720 + i * 100
        d.rectangle([x, 560 - h, x + 56, 560], fill=[RED, BLUE, YELLOW, GOLD][i])
    d.ellipse([1040, 200, 1140, 300], outline=GOLD, width=6)


def city_union_neft_shutdown(d: ImageDraw.ImageDraw) -> None:
    """Transfer arrows broken mid-line; vault left."""
    d.rounded_rectangle([100, 200, 460, 560], radius=18, fill=BLUE)
    d.rectangle([180, 280, 380, 480], fill=CREAM)
    d.line([(280, 320), (280, 440)], fill=GOLD, width=12)
    d.line([(640, 340), (780, 340)], fill=RED, width=8)
    d.line([(820, 340), (960, 340)], fill=RED, width=8)
    d.polygon([(780, 300), (820, 340), (780, 380)], fill=YELLOW)
    d.rectangle([1000, 260, 1140, 420], fill=BLUE)
    d.line([(1020, 300), (1120, 400)], fill=GOLD, width=4)
    d.line([(1120, 300), (1020, 400)], fill=GOLD, width=4)


def india_fertiliser_winter(d: ImageDraw.ImageDraw) -> None:
    """Wheat rows; subsidy sack motif."""
    for i in range(6):
        y = 320 + i * 36
        d.rectangle([80, y, 520, y + 20], fill=YELLOW if i % 2 else GOLD)
    d.rounded_rectangle([140, 160, 220, 280], radius=12, fill=BLUE)
    d.rectangle([620, 220, 820, 520], fill=RED)
    d.polygon([(620, 220), (720, 160), (820, 220)], fill=BLUE)
    d.rectangle([700, 360, 740, 520], fill=YELLOW)
    for i, h in enumerate([80, 120, 160]):
        x = 880 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, YELLOW][i])


def pli_bess_grid_shortlist(d: ImageDraw.ImageDraw) -> None:
    """Grid substation; stacked charge blocks."""
    d.rectangle([100, 280, 420, 560], fill=BLUE)
    d.polygon([(200, 200), (320, 140), (440, 200), (440, 300), (160, 300)], fill=RED)
    for i, h in enumerate([80, 140, 220, 300]):
        x = 640 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[YELLOW, RED, BLUE, YELLOW][i])
    d.line([(620, 560), (1180, 560)], fill=INK, width=2)
    d.ellipse([900, 240, 1060, 400], fill=CREAM)
    d.arc([920, 260, 1040, 380], 200, 340, fill=GOLD, width=6)


def vodafone_idea_q2_funding(d: ImageDraw.ImageDraw) -> None:
    """Telecom tower; capital pipe into network nodes."""
    d.rectangle([480, 120, 560, 580], fill=RED)
    d.line([(520, 120), (520, 80)], fill=GOLD, width=4)
    for x in (500, 540):
        d.line([(x, 160), (x - 40, 220)], fill=BLUE, width=3)
        d.line([(x, 160), (x + 40, 220)], fill=BLUE, width=3)
    d.rectangle([120, 360, 400, 560], fill=YELLOW)
    for y in range(380, 520, 50):
        d.rectangle([140, y, 380, y + 28], fill=CREAM)
    d.polygon([(700, 400), (1120, 360), (1120, 440), (700, 480)], fill=BLUE)


def yatra_mice_air_split(d: ImageDraw.ImageDraw) -> None:
    """Flight arc vs empty event stage."""
    d.polygon([(120, 480), (320, 320), (520, 480)], fill=BLUE)
    d.ellipse([280, 300, 360, 380], fill=YELLOW)
    d.rectangle([680, 400, 1120, 560], fill=RED)
    d.rectangle([720, 440, 1080, 520], fill=CREAM)
    d.line([(720, 480), (1080, 480)], fill=GOLD, width=3)
    d.rectangle([800, 200, 880, 360], fill=BLUE)
    d.polygon([(840, 200), (920, 240), (840, 280)], fill=GOLD)


def tata_power_pumped_storage(d: ImageDraw.ImageDraw) -> None:
    """Dual reservoirs; uphill pipe and turbine block."""
    d.ellipse([100, 380, 320, 560], fill=BLUE)
    d.ellipse([120, 360, 300, 500], fill=CREAM)
    d.polygon([(160, 200), (260, 120), (360, 200), (360, 340), (160, 340)], fill=RED)
    d.line([(260, 340), (260, 420)], fill=GOLD, width=8)
    for i in range(4):
        y = 200 + i * 40
        d.polygon([(520, y), (560, y + 20), (520, y + 40)], fill=GOLD)
    d.rectangle([600, 260, 1120, 520], fill=BLUE)
    d.ellipse([780, 320, 940, 480], fill=YELLOW)
    d.polygon([(940, 400), (1020, 360), (1020, 440)], fill=RED)


def india_alcobev_packaging(d: ImageDraw.ImageDraw) -> None:
    """Glass bottle blocks; rising cost bars."""
    d.rounded_rectangle([120, 180, 260, 560], radius=24, fill=BLUE)
    d.rectangle([150, 220, 230, 520], fill=CREAM)
    d.rounded_rectangle([300, 240, 420, 560], radius=20, fill=RED)
    for i, h in enumerate([140, 200, 280, 360]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, RED, BLUE, YELLOW][i])
    d.line([(620, 560), (1180, 560)], fill=INK, width=2)
    d.polygon([(560, 300), (620, 260), (620, 340)], fill=GOLD)


def india_scotch_customs_meet(d: ImageDraw.ImageDraw) -> None:
    """Port crane silhouette; split duty arrows."""
    d.rectangle([100, 400, 480, 560], fill=BLUE)
    d.polygon([(300, 400), (300, 180), (360, 140), (420, 180), (420, 400)], fill=RED)
    d.line([(300, 200), (480, 200)], fill=GOLD, width=4)
    d.line([(660, 200), (1180, 200)], fill=GOLD, width=2)
    d.polygon([(700, 280), (780, 240), (860, 280), (820, 380), (740, 380)], fill=YELLOW)
    d.polygon([(920, 300), (1000, 260), (1080, 300), (1040, 400), (960, 400)], fill=RED)
    d.line([(720, 440), (1080, 440)], fill=BLUE, width=6)


def singapore_airlines_air_india(d: ImageDraw.ImageDraw) -> None:
    """Twin tails; loss bar stepping down."""
    d.polygon([(200, 520), (280, 200), (360, 520)], fill=BLUE)
    d.polygon([(440, 520), (520, 240), (600, 520)], fill=RED)
    for i, h in enumerate([380, 320, 260, 220]):
        x = 720 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, RED, YELLOW, BLUE][i])
    d.line([(700, 560), (1180, 560)], fill=INK, width=2)
    d.arc([100, 120, 400, 200], 0, 180, fill=GOLD, width=3)


def rbi_pe_nbfc_curbs(d: ImageDraw.ImageDraw) -> None:
    """One key, two doors; regulatory split."""
    d.rectangle([140, 200, 260, 520], fill=BLUE)
    d.polygon([(200, 180), (240, 200), (200, 220)], fill=GOLD)
    d.rectangle([360, 200, 480, 520], fill=RED)
    d.polygon([(420, 180), (460, 200), (420, 220)], fill=GOLD)
    d.line([(260, 360), (360, 360)], fill=INK, width=6)
    d.ellipse([600, 240, 760, 400], fill=YELLOW)
    for i, y in enumerate([260, 340, 420, 500]):
        d.rectangle([820, y, 1120, y + 40], fill=[RED, BLUE, YELLOW, GOLD][i])


def nbfc_rural_drought(d: ImageDraw.ImageDraw) -> None:
    """Dry field left; gated loan bars right."""
    d.rectangle([80, 320, 500, 560], fill=YELLOW)
    for x in range(120, 460, 60):
        d.line([(x, 560), (x, 380)], fill=GOLD, width=3)
    d.ellipse([220, 200, 360, 300], fill=RED)
    for i, h in enumerate([80, 120, 160, 120, 80]):
        x = 640 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[BLUE, RED, YELLOW, BLUE, RED][i])
    d.polygon([(1000, 560), (1100, 460), (1180, 560)], fill=BLUE)


def beml_tunnel_boring(d: ImageDraw.ImageDraw) -> None:
    """TBM disc left; underground arc right."""
    d.ellipse([120, 220, 420, 520], fill=BLUE)
    d.ellipse([180, 280, 360, 460], outline=GOLD, width=8)
    d.line([(300, 260), (300, 480)], fill=RED, width=6)
    d.line([(220, 370), (380, 370)], fill=RED, width=6)
    d.arc([620, 280, 1100, 560], 200, 340, fill=YELLOW, width=14)
    d.rectangle([700, 140, 780, 220], fill=RED)
    d.polygon([(900, 160), (980, 200), (900, 240)], fill=GOLD)


def msci_india_em_weight(d: ImageDraw.ImageDraw) -> None:
    """Index ladder blocks; passive flow chevrons."""
    for i, h in enumerate([100, 140, 180, 220, 260]):
        x = 120 + i * 55
        d.rectangle([x, 560 - h, x + 40, 560], fill=[RED, BLUE, YELLOW, BLUE, RED][i])
    d.line([(80, 560), (520, 560)], fill=INK, width=2)
    d.polygon([(520, 560), (600, 480), (680, 560)], fill=GOLD)
    d.rectangle([720, 180, 1100, 520], fill=BLUE)
    for row in range(5):
        for col in range(4):
            d.rectangle(
                [740 + col * 80, 200 + row * 60, 800 + col * 80, 240 + row * 60],
                fill=YELLOW if (row + col) % 2 else RED,
            )
    d.polygon([(1040, 300), (1160, 260), (1160, 340)], fill=GOLD)


def bhel_gujarat_re_transmission(d: ImageDraw.ImageDraw) -> None:
    """Transmission tower; solar arc evacuation."""
    d.rectangle([200, 160, 280, 520], fill=BLUE)
    d.line([(140, 220), (340, 220)], fill=GOLD, width=4)
    d.line([(140, 320), (340, 320)], fill=GOLD, width=4)
    d.line([(140, 420), (340, 420)], fill=GOLD, width=4)
    d.ellipse([80, 360, 200, 480], fill=YELLOW)
    d.polygon([(600, 480), (900, 200), (1100, 480)], fill=RED)
    for i in range(6):
        d.line([(620 + i * 80, 480), (760 + i * 40, 280)], fill=GOLD, width=3)
    d.polygon([(980, 480), (1080, 400), (1180, 480)], fill=BLUE)


def hfcl_ofc_export(d: ImageDraw.ImageDraw) -> None:
    """Fibre coil; export arc to overseas tile."""
    for i in range(8):
        r = 60 + i * 18
        d.ellipse([160 - r, 360 - r, 160 + r, 360 + r], outline=[RED, BLUE, YELLOW][i % 3], width=3)
    d.rectangle([520, 260, 1120, 460], fill=CREAM)
    d.arc([540, 280, 1100, 440], 20, 160, fill=BLUE, width=12)
    d.polygon([(700, 360), (900, 300), (1050, 360), (900, 420)], fill=RED)
    d.ellipse([1000, 180, 1120, 260], fill=YELLOW)
    d.line([(900, 360), (1060, 220)], fill=GOLD, width=4)


def india_onion_e_auction(d: ImageDraw.ImageDraw) -> None:
    """Onion dome form; bid ladder."""
    d.ellipse([120, 280, 320, 480], fill=YELLOW)
    d.arc([140, 200, 300, 320], 200, 340, fill=RED, width=12)
    for i, h in enumerate([80, 120, 160, 200, 240]):
        x = 640 + i * 70
        d.rectangle([x, 560 - h, x + 45, 560], fill=[BLUE, RED, YELLOW, BLUE, RED][i])
    d.polygon([(600, 360), (680, 320), (760, 360)], fill=GOLD)


def pricol_memory_pressure(d: ImageDraw.ImageDraw) -> None:
    """Dashboard arc; memory chip grid squeezing margin."""
    d.rounded_rectangle([100, 320, 480, 520], radius=20, fill=BLUE)
    d.arc([160, 260, 420, 420], 200, 340, fill=YELLOW, width=18)
    for row in range(4):
        for col in range(5):
            x = 640 + col * 55
            y = 240 + row * 70
            d.rectangle([x, y, x + 40, y + 50], fill=[RED, YELLOW, BLUE][(row + col) % 3])
    d.polygon([(580, 400), (620, 480), (660, 400)], fill=GOLD)


def india_coal_gasification_round2(d: ImageDraw.ImageDraw) -> None:
    """Coal block; lone pipeline vs empty bidder seats."""
    d.rectangle([100, 360, 360, 540], fill=INK)
    d.rectangle([140, 280, 320, 360], fill=RED)
    d.polygon([(200, 540), (260, 200), (320, 540)], fill=BLUE)
    for i in range(4):
        x = 680 + i * 100
        d.rectangle([x, 420, x + 60, 480], fill=CREAM if i else YELLOW)
        d.rectangle([x, 500, x + 60, 520], fill=GOLD if i else BLUE)
    d.line([(640, 400), (1180, 400)], fill=GOLD, width=2)


def india_liquor_karnataka_tn(d: ImageDraw.ImageDraw) -> None:
    """Two state map blocks; bottles stepping up."""
    d.rectangle([100, 200, 280, 560], fill=BLUE)
    d.rectangle([300, 240, 480, 560], fill=RED)
    for y in range(240, 520, 60):
        d.polygon([(520, y), (580, y + 30), (520, y + 60)], fill=GOLD)
        h = min(220, 40 + (y - 200) // 3)
        d.rounded_rectangle([640, 560 - h, 700, 560], radius=8, fill=YELLOW)


def amex_reward_reversal(d: ImageDraw.ImageDraw) -> None:
    """Card slab; points counter U-turn arrow."""
    d.rounded_rectangle([100, 240, 480, 520], radius=28, fill=BLUE)
    d.rounded_rectangle([140, 300, 440, 380], radius=12, fill=YELLOW)
    d.rectangle([140, 420, 300, 460], fill=CREAM)
    d.arc([640, 200, 1100, 520], 200, 340, fill=RED, width=10)
    d.polygon([(780, 360), (840, 320), (840, 400)], fill=GOLD)
    for i, w in enumerate([1180, 1120, 1060]):
        d.rectangle([640, 480 + i * 30, w, 510 + i * 30], fill=[RED, YELLOW, BLUE][i])


def patna_municipal_bond(d: ImageDraw.ImageDraw) -> None:
    """City hall silhouette; bond certificate blocks."""
    d.rectangle([120, 260, 480, 540], fill=RED)
    d.polygon([(120, 260), (300, 160), (480, 260)], fill=BLUE)
    d.rectangle([200, 380, 260, 540], fill=YELLOW)
    d.rectangle([340, 380, 400, 540], fill=YELLOW)
    for i, h in enumerate([120, 180, 240]):
        x = 640 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[BLUE, YELLOW, RED][i])
    d.line([(620, 560), (1180, 560)], fill=GOLD, width=3)


def plfs_q2_unemployment(d: ImageDraw.ImageDraw) -> None:
    """Rural field vs urban blocks; rising participation bars."""
    d.rectangle([80, 380, 520, 560], fill=YELLOW)
    for i in range(5):
        d.line([(100 + i * 80, 560), (140 + i * 80, 420 - i * 15)], fill=GOLD, width=3)
    d.rectangle([620, 260, 700, 560], fill=BLUE)
    d.rectangle([740, 320, 820, 560], fill=RED)
    d.rectangle([860, 300, 940, 560], fill=BLUE)
    for i, h in enumerate([200, 260, 220, 300]):
        x = 1000 + i * 55
        d.rectangle([x, 560 - h, x + 40, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.line([(620, 560), (1180, 560)], fill=INK, width=2)


def lt_noida_metro(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 480, 1180, 520], fill=INK, width=0)
    d.rectangle([200, 360, 260, 480], fill=BLUE)
    d.rectangle([500, 320, 560, 480], fill=RED)
    d.rectangle([820, 280, 880, 480], fill=YELLOW)
    d.line([(140, 480), (1120, 280)], fill=GOLD, width=4)
    d.polygon([(1020, 200), (1120, 240), (1040, 280)], fill=RED)


def india_small_launchers(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 220, 320, 420], fill=RED)
    d.rectangle([280, 300, 420, 520], fill=BLUE)
    d.polygon([(400, 300), (480, 180), (560, 300)], fill=YELLOW)
    d.ellipse([780, 160, 1100, 380], outline=GOLD, width=6)
    d.line([(880, 380), (1000, 520)], fill=BLUE, width=5)


def intl_mf_gate(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 200, 520, 560], radius=20, fill=BLUE)
    d.rectangle([200, 320, 440, 380], fill=YELLOW)
    d.rectangle([200, 420, 360, 480], fill=CREAM)
    d.line([(640, 200), (640, 560)], fill=GOLD, width=4)
    for i, h in enumerate([40, 40, 180, 180]):
        x = 720 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[RED, RED, YELLOW, YELLOW][i])


def marico_bonorizon(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 260, 340, 460], fill=YELLOW)
    d.rectangle([320, 340, 520, 520], fill=RED)
    d.polygon([(900, 520), (980, 360), (1060, 520)], fill=BLUE)
    d.rectangle([700, 220, 760, 320], fill=GOLD)
    d.rectangle([820, 180, 880, 280], fill=GOLD)


def bank_baroda_mclr(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([100, 280, 480, 560], fill=BLUE)
    for i, h in enumerate([100, 160, 240, 320]):
        x = 620 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, YELLOW, RED, BLUE][i])
    d.polygon([(980, 200), (1120, 280), (980, 360), (840, 280)], fill=GOLD)
    d.line([(480, 420), (620, 380)], fill=GOLD, width=3)


def makemytrip_india_ipo(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 220, 360, 460], fill=BLUE)
    d.polygon([(720, 520), (820, 320), (920, 520)], fill=RED)
    d.rectangle([1000, 260, 1140, 400], fill=YELLOW)
    d.line([(360, 340), (720, 420)], fill=GOLD, width=4)
    d.polygon([(1020, 180), (1100, 220), (1020, 260)], fill=GOLD)


def fpi_far_gsec(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([80, 380, 520, 520], fill=BLUE)
    for i, w in enumerate([900, 980, 1060, 1140]):
        d.rectangle([700, 520 - 40 - i * 50, w, 520], fill=[RED, YELLOW, BLUE, RED][i])
    d.ellipse([1080, 200, 1160, 280], fill=YELLOW)
    d.line([(520, 450), (700, 420)], fill=GOLD, width=4)


def hul_detergent_mrp(d: ImageDraw.ImageDraw) -> None:
    """Laundry pack on shelf; stepped MRP bars."""
    d.rounded_rectangle([100, 240, 420, 540], radius=20, fill=BLUE)
    d.rectangle([160, 300, 360, 380], fill=YELLOW)
    d.rectangle([160, 400, 360, 480], fill=CREAM)
    for i, h in enumerate([80, 130, 200, 270]):
        x = 560 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, RED, BLUE][i])
    d.polygon([(1040, 220), (1120, 280), (1040, 340)], fill=GOLD)


def veritas_finance_ipo(d: ImageDraw.ImageDraw) -> None:
    """Small-business storefront; listing arch / gate."""
    d.rectangle([120, 360, 480, 560], fill=BLUE)
    d.rectangle([180, 280, 420, 360], fill=YELLOW)
    d.polygon([(140, 280), (300, 180), (460, 280)], fill=RED)
    d.arc([620, 200, 1140, 600], 200, 340, fill=GOLD, width=6)
    d.rectangle([700, 440, 1060, 500], fill=RED)


def cbi_future_retail_fraud(d: ImageDraw.ImageDraw) -> None:
    """Bank column; diverted flow / broken pipeline."""
    d.rectangle([140, 200, 280, 560], fill=BLUE)
    d.rectangle([200, 240, 240, 520], fill=CREAM)
    d.line([(280, 400), (520, 400)], fill=GOLD, width=4)
    d.polygon([(520, 400), (580, 340), (580, 460)], fill=GOLD)
    for y in range(280, 520, 60):
        d.line([(640, y), (1120, y + 40)], fill=RED, width=6)
    d.ellipse([1020, 260, 1100, 340], outline=YELLOW, width=6)


def intellismart_metering(d: ImageDraw.ImageDraw) -> None:
    """Smart meter disc; consolidation chevrons."""
    d.rounded_rectangle([100, 240, 360, 520], radius=20, fill=BLUE)
    d.ellipse([180, 300, 280, 400], fill=CREAM)
    for a in range(0, 360, 45):
        r = 90
        cx, cy = 230, 350
        x = cx + r * math.cos(math.radians(a))
        y = cy + r * math.sin(math.radians(a))
        d.line([(cx, cy), (x, y)], fill=GOLD, width=3)
    d.rectangle([640, 280, 1120, 340], fill=RED)
    d.rectangle([640, 380, 1050, 440], fill=YELLOW)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 700 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[BLUE, RED, YELLOW, GOLD][i])


def gem_jewellery_export(d: ImageDraw.ImageDraw) -> None:
    """Studded arc; outbound cargo lane."""
    d.ellipse([140, 280, 340, 480], fill=YELLOW)
    d.polygon([(220, 260), (260, 220), (300, 260)], fill=GOLD)
    for i in range(5):
        d.ellipse([170 + i * 35, 360, 200 + i * 35, 390], fill=RED if i % 2 else BLUE)
    d.line([(520, 400), (720, 360)], fill=GOLD, width=5)
    d.polygon([(720, 360), (1180, 300), (1180, 420), (720, 480)], fill=BLUE)
    for i, h in enumerate([100, 160, 220]):
        x = 900 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, YELLOW, RED][i])


def travel_food_airport(d: ImageDraw.ImageDraw) -> None:
    """Terminal gate; rising ticket bars on flat footfall."""
    d.polygon([(120, 520), (260, 200), (400, 520)], fill=BLUE)
    d.rectangle([200, 360, 320, 520], fill=CREAM)
    for i in range(4):
        x = 560 + i * 70
        d.polygon([(x, 520), (x + 20, 480), (x + 40, 520)], fill=GOLD)
    for i, h in enumerate([200, 280, 360, 440]):
        x = 720 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.rounded_rectangle([980, 300, 1140, 480], radius=16, fill=YELLOW)


def paytm_rbi_ppi(d: ImageDraw.ImageDraw) -> None:
    """Wallet form left; compliance gate right."""
    d.rounded_rectangle([100, 220, 420, 540], radius=24, fill=BLUE)
    d.rounded_rectangle([150, 280, 370, 480], radius=18, fill=CREAM)
    d.ellipse([220, 340, 300, 420], fill=YELLOW)
    d.rectangle([640, 180, 720, 560], fill=GOLD)
    d.polygon([(720, 240), (900, 200), (900, 360), (720, 400)], fill=RED)
    d.rectangle([920, 260, 1100, 320], fill=BLUE)
    d.rectangle([920, 360, 1060, 420], fill=YELLOW)


def hdfc_hybrid_sif(d: ImageDraw.ImageDraw) -> None:
    """Long bars up; short bars down; Dec symmetry."""
    for i, h in enumerate([180, 260, 340, 420]):
        x = 120 + i * 90
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, BLUE, YELLOW, RED][i])
    for i, h in enumerate([100, 160, 220]):
        x = 800 + i * 90
        d.rectangle([x, 560, x + 55, 560 + h], fill=BLUE)
    d.line([(80, 400), (1200, 400)], fill=GOLD, width=3)
    d.polygon([(600, 120), (680, 180), (600, 240), (520, 180)], fill=GOLD)


def abb_record_orders(d: ImageDraw.ImageDraw) -> None:
    """Transformer motif; rising order staircase."""
    d.rectangle([120, 280, 280, 520], fill=BLUE)
    d.rectangle([160, 320, 240, 480], fill=YELLOW)
    d.line([(200, 200), (200, 280)], fill=GOLD, width=6)
    for i, h in enumerate([140, 220, 300, 400, 480]):
        x = 520 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[RED, GOLD, BLUE, YELLOW, RED][i])
    d.polygon([(1100, 260), (1180, 300), (1100, 340)], fill=GOLD)


def icici_cad_forecast(d: ImageDraw.ImageDraw) -> None:
    """Trade ships vs inward cargo stacks."""
    d.polygon([(140, 500), (280, 420), (420, 500), (280, 580)], fill=BLUE)
    d.rectangle([100, 280, 460, 360], fill=RED)
    for i, h in enumerate([180, 260, 340, 420, 500]):
        x = 640 + i * 75
        d.rectangle([x, 560 - h, x + 55, 560], fill=[YELLOW, RED, BLUE, GOLD, YELLOW][i])
    d.line([(620, 560), (1180, 560)], fill=INK, width=2)
    d.ellipse([1000, 220, 1160, 380], outline=GOLD, width=5)
    d.arc([1020, 240, 1140, 360], 200, 340, fill=RED, width=4)


def senco_gold_retail(d: ImageDraw.ImageDraw) -> None:
    """Storefront awning; margin bars lagging revenue steps."""
    d.polygon([(120, 320), (480, 260), (480, 420), (120, 480)], fill=YELLOW)
    d.rectangle([200, 360, 400, 440], fill=RED)
    for i, h in enumerate([400, 340, 280]):
        d.rectangle([620 + i * 90, 560 - h, 690 + i * 90, 560], fill=BLUE)
    for i, h in enumerate([120, 180, 240, 300, 360, 420]):
        x = 720 + i * 55
        d.rectangle([x, 560 - h, x + 40, 560], fill=GOLD if i % 2 else RED)
    d.line([(80, 560), (1180, 560)], fill=INK, width=2)


def mf_sip_stoppage(d: ImageDraw.ImageDraw) -> None:
    """Calendar SIP ticks; broken chain links on the right."""
    for i in range(6):
        x = 120 + i * 70
        d.ellipse([x, 280, x + 50, 330], fill=BLUE)
        d.line([(x + 25, 330), (x + 25, 400)], fill=GOLD, width=3)
    d.arc([780, 260, 1140, 620], 30, 150, fill=RED, width=8)
    d.arc([780, 260, 1140, 620], 210, 330, fill=RED, width=8)
    d.line([(900, 380), (1020, 500)], fill=RED, width=6)


def reliance_andhra_cbg(d: ImageDraw.ImageDraw) -> None:
    """Farm residue silo; methane flame pipeline."""
    d.ellipse([120, 320, 320, 520], fill=YELLOW)
    d.rectangle([200, 260, 280, 320], fill=RED)
    d.rectangle([340, 360, 480, 540], fill=BLUE)
    for i in range(5):
        y = 380 + i * 32
        d.rectangle([120, y, 480, y + 18], fill=GOLD if i % 2 else CREAM)
    d.line([(480, 420), (640, 420)], fill=GOLD, width=5)
    for i, h in enumerate([120, 200, 280, 360]):
        x = 700 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.polygon([(1040, 240), (1140, 320), (1040, 400)], fill=GOLD)


def airtel_payments_bank_ipo(d: ImageDraw.ImageDraw) -> None:
    """SIM tower; deposit staircase to listing gate."""
    d.rectangle([120, 180, 200, 560], fill=BLUE)
    d.polygon([(160, 180), (220, 100), (280, 180)], fill=RED)
    d.rounded_rectangle([320, 280, 520, 520], radius=20, fill=YELLOW)
    d.rectangle([360, 340, 480, 400], fill=CREAM)
    for i, h in enumerate([100, 180, 260, 340, 420]):
        x = 620 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[RED, BLUE, YELLOW, RED, GOLD][i])
    d.rectangle([1040, 200, 1120, 520], fill=GOLD)
    d.polygon([(1000, 360), (1040, 320), (1040, 400)], fill=BLUE)


def tata_motors_jlr_restruct(d: ImageDraw.ImageDraw) -> None:
    """Luxury grille; shrinking workforce chevrons."""
    d.rectangle([100, 320, 500, 520], fill=BLUE)
    d.ellipse([160, 360, 440, 480], fill=CREAM)
    d.line([(220, 400), (380, 400)], fill=RED, width=6)
    for i, w in enumerate([1180, 1100, 1020, 940, 860]):
        d.rectangle([640, 200 + i * 70, w, 260 + i * 70], fill=[YELLOW, RED, BLUE, YELLOW, RED][i])
    d.polygon([(900, 480), (980, 420), (1060, 480)], fill=GOLD)
    d.line([(80, 560), (1180, 560)], fill=INK, width=2)


def tata_trusts_listing(d: ImageDraw.ImageDraw) -> None:
    """Trust columns; listing steps ascending."""
    for i, x in enumerate([100, 200, 300, 400]):
        d.rectangle([x, 300 + i * 40, x + 60, 560], fill=[BLUE, RED, BLUE, YELLOW][i])
    for i, w in enumerate([700, 850, 1000, 1150]):
        d.rectangle([w - 80, 520 - (i + 1) * 80, w, 520], fill=GOLD if i % 2 else RED)
    d.line([(660, 200), (660, 560)], fill=GOLD, width=2)


def telecom_fake_court_orders(d: ImageDraw.ImageDraw) -> None:
    """Gavel seal; broken chain on data flow."""
    d.polygon([(140, 160), (340, 120), (420, 280), (280, 420), (120, 360)], fill=BLUE)
    d.ellipse([200, 240, 300, 340], fill=YELLOW)
    d.line([(620, 200), (1120, 200)], fill=RED, width=10)
    for i, x in enumerate([700, 850, 1000]):
        d.rectangle([x, 240, x + 40, 520], fill=[RED, BLUE, YELLOW][i])
    d.line([(680, 380), (1180, 460)], fill=GOLD, width=4)
    d.polygon([(900, 120), (980, 180), (900, 240)], fill=RED)


def mufin_ad_ii_forex(d: ImageDraw.ImageDraw) -> None:
    """Rupee coin; outbound remittance arcs."""
    d.ellipse([120, 260, 320, 460], fill=RED)
    d.line([(220, 300), (220, 420)], fill=CREAM, width=12)
    d.arc([360, 180, 760, 500], 300, 30, fill=BLUE, width=8)
    d.arc([400, 220, 720, 460], 20, 160, fill=GOLD, width=5)
    for i, y in enumerate([300, 380, 460]):
        d.rectangle([820 + i * 60, y, 880 + i * 60, 560], fill=[BLUE, YELLOW, RED][i])
    d.polygon([(1040, 280), (1160, 320), (1040, 360)], fill=GOLD)


def mahanadi_coalfields_ipo(d: ImageDraw.ImageDraw) -> None:
    """Open pit silhouette; share ticket stack."""
    d.polygon([(100, 560), (420, 220), (520, 560)], fill=BLUE)
    d.rectangle([200, 400, 360, 560], fill=YELLOW)
    for i, h in enumerate([140, 220, 300]):
        x = 680 + i * 90
        d.rectangle([x, 560 - h, x + 70, 560], fill=[RED, GOLD, BLUE][i])
    d.rectangle([960, 180, 1140, 520], fill=CREAM)
    d.line([(960, 240), (1140, 240)], fill=GOLD, width=3)
    d.line([(960, 320), (1140, 320)], fill=RED, width=3)


def patanjali_fmcg_margin(d: ImageDraw.ImageDraw) -> None:
    """Grocery shelf; narrowing margin band."""
    for y in range(240, 520, 56):
        d.rectangle([100, y, 480, y + 36], fill=BLUE if y % 112 else YELLOW)
    d.rectangle([560, 320, 1120, 380], fill=RED)
    d.rectangle([560, 420, 900, 480], fill=GOLD)
    d.polygon([(1000, 200), (1140, 260), (1000, 320)], fill=BLUE)
    d.line([(520, 200), (520, 560)], fill=GOLD, width=2)


def gold_loan_fgloc(d: ImageDraw.ImageDraw) -> None:
    """Gold bar stack with regulatory scale."""
    d.rectangle([120, 260, 460, 540], fill=YELLOW)
    d.rectangle([160, 300, 420, 380], fill=GOLD)
    d.rectangle([160, 400, 420, 480], fill=GOLD)
    d.line([(520, 200), (520, 560)], fill=GOLD, width=2)
    for i, h in enumerate([80, 140, 200, 260]):
        x = 600 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.polygon([(960, 220), (1120, 300), (960, 380)], fill=BLUE)
    d.rectangle([1000, 420, 1140, 500], fill=RED)


def prestige_mumbai_office(d: ImageDraw.ImageDraw) -> None:
    """Twin towers with JV split."""
    d.rectangle([140, 220, 280, 560], fill=BLUE)
    d.rectangle([300, 180, 440, 560], fill=RED)
    d.rectangle([200, 260, 380, 300], fill=GOLD)
    d.line([(520, 160), (520, 580)], fill=GOLD, width=2)
    d.rectangle([620, 280, 1120, 520], fill=CREAM)
    d.rectangle([700, 340, 1040, 380], fill=YELLOW)
    d.rectangle([700, 420, 1040, 460], fill=BLUE)


def ndr_auto_seats(d: ImageDraw.ImageDraw) -> None:
    """Car seat form with Korea-India bridge."""
    d.rounded_rectangle([100, 300, 480, 520], radius=28, fill=RED)
    d.rounded_rectangle([140, 340, 440, 480], fill=CREAM)
    d.line([(520, 200), (520, 560)], fill=GOLD, width=2)
    d.polygon([(640, 400), (820, 320), (1000, 400), (820, 480)], fill=BLUE)
    d.rectangle([900, 220, 1140, 280], fill=YELLOW)
    d.rectangle([900, 500, 1140, 540], fill=RED)


def reliance_campa_plant(d: ImageDraw.ImageDraw) -> None:
    """Bottling line with orchard hint."""
    for i in range(4):
        d.rectangle([120 + i * 80, 360, 180 + i * 80, 560], fill=BLUE if i % 2 else RED)
    d.ellipse([200, 280, 320, 360], fill=YELLOW)
    d.line([(520, 180), (520, 580)], fill=GOLD, width=2)
    d.polygon([(700, 500), (780, 300), (860, 500)], fill=RED)
    d.polygon([(900, 520), (960, 380), (1020, 520)], fill=BLUE)
    d.rectangle([1040, 400, 1160, 560], fill=GOLD)


def gst_corporate_guarantee(d: ImageDraw.ImageDraw) -> None:
    """Parent guarantee linking SPV loan to tax ledger."""
    d.rectangle([100, 200, 460, 560], fill=BLUE)
    d.rectangle([160, 280, 400, 480], fill=CREAM)
    d.line([(280, 300), (280, 460)], fill=GOLD, width=4)
    for i, h in enumerate([100, 160, 220, 280]):
        x = 700 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, BLUE, YELLOW, GOLD][i])
    d.polygon([(900, 220), (1100, 260), (900, 300)], fill=RED)
    d.line([(520, 380), (680, 380)], fill=GOLD, width=6)


def rbi_api_cyber(d: ImageDraw.ImageDraw) -> None:
    """API gateway with padlock."""
    d.rectangle([120, 240, 500, 520], fill=BLUE)
    for y in range(280, 500, 40):
        d.rectangle([150, y, 470, y + 20], fill=YELLOW if y % 80 else RED)
    d.rounded_rectangle([720, 260, 1080, 500], radius=20, fill=CREAM)
    d.arc([820, 180, 980, 340], 0, 180, fill=GOLD, width=12)
    d.rectangle([860, 340, 940, 500], fill=RED)


def infosys_ntt_docomo_jv(d: ImageDraw.ImageDraw) -> None:
    """Partnership arc across telecom tower and data flow."""
    d.rectangle([100, 200, 480, 560], fill=BLUE)
    d.polygon([(300, 240), (380, 320), (380, 500), (300, 560), (220, 500), (220, 320)], fill=YELLOW)
    d.line([(700, 360), (1180, 360)], fill=GOLD, width=6)
    for x in range(720, 1160, 80):
        d.ellipse([x, 300, x + 40, 340], fill=RED)


def psb_business_300_lakh(d: ImageDraw.ImageDraw) -> None:
    """Rising loan bars from public-sector bank facade."""
    d.rectangle([120, 180, 460, 580], fill=BLUE)
    d.rectangle([200, 260, 380, 520], fill=CREAM)
    for i, h in enumerate([140, 220, 300, 380, 440]):
        x = 620 + i * 90
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, GOLD, BLUE, YELLOW, RED][i])


def it_contract_staffing(d: ImageDraw.ImageDraw) -> None:
    """Fast contract bars overtaking slow permanent ladder."""
    d.line([(200, 560), (200, 180)], fill=GOLD, width=4)
    for y in range(200, 520, 80):
        d.rectangle([220, y, 460, y + 40], fill=BLUE)
    for i, h in enumerate([180, 280, 400, 520]):
        x = 700 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=RED)


def biocon_pebrilzo_eu(d: ImageDraw.ImageDraw) -> None:
    """Laboratory motif with approval shield."""
    d.rounded_rectangle([120, 220, 440, 540], radius=28, fill=BLUE)
    d.ellipse([220, 320, 340, 440], fill=YELLOW)
    d.polygon([(720, 260), (900, 360), (720, 460)], fill=RED)
    d.rectangle([960, 300, 1120, 420], fill=GOLD)


def sbi_mf_pnb_distribution(d: ImageDraw.ImageDraw) -> None:
    """Branch doorways feeding mutual-fund vault."""
    for i in range(3):
        x = 100 + i * 140
        d.rectangle([x, 260, x + 100, 560], fill=BLUE)
        d.rectangle([x + 20, 320, x + 80, 500], fill=CREAM)
    d.rounded_rectangle([640, 240, 1100, 520], radius=24, fill=RED)
    d.ellipse([780, 340, 960, 420], fill=GOLD)
    for i, h in enumerate([100, 160, 220]):
        d.rectangle([1000 + i * 50, 520 - h, 1040 + i * 50, 520], fill=YELLOW)


def fairfax_iifl_block(d: ImageDraw.ImageDraw) -> None:
    """Stake blocks moving between vaults."""
    d.rounded_rectangle([100, 280, 420, 520], radius=24, fill=BLUE)
    d.rounded_rectangle([180, 340, 340, 480], fill=GOLD)
    d.polygon([(620, 520), (780, 360), (940, 520), (780, 680)], fill=RED)
    for i, w in enumerate([700, 860, 1020]):
        d.rectangle([w, 200 + i * 40, w + 50, 360], fill=[YELLOW, BLUE, GOLD][i])


def groww_ribbit_block(d: ImageDraw.ImageDraw) -> None:
    """Smartphone stack with sponsor exit arrow."""
    d.rounded_rectangle([140, 220, 400, 540], radius=32, fill=BLUE)
    d.rectangle([180, 280, 360, 500], fill=CREAM)
    d.ellipse([240, 460, 300, 500], fill=YELLOW)
    d.polygon([(700, 480), (1100, 400), (1100, 520)], fill=RED)
    for i, h in enumerate([120, 200, 260]):
        x = 820 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[GOLD, BLUE, YELLOW][i])


def ctrls_bihar_dc(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([80, 120, 180, 240]):
        x = 120 + i * 55
        d.rectangle([x, 560 - h, x + 40, 560], fill=[BLUE, RED, YELLOW, BLUE][i])
    d.rectangle([720, 200, 900, 520], fill=BLUE)
    for y in range(240, 500, 50):
        d.rectangle([740, y, 880, y + 30], fill=CREAM)
    d.line([(680, 560), (1120, 560)], fill=GOLD, width=3)
    d.polygon([(1000, 160), (1080, 200), (1000, 240)], fill=RED)


def waaree_solapur_storage(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([140, 200, 340, 400], fill=YELLOW)
    for i in range(4):
        d.rectangle([380 + i * 60, 400, 430 + i * 60, 560], fill=BLUE)
    d.rounded_rectangle([760, 320, 960, 520], radius=20, fill=RED)
    d.line([(960, 420), (1120, 380)], fill=GOLD, width=4)
    d.polygon([(800, 560), (880, 480), (960, 560)], fill=GOLD)


def iip_october(d: ImageDraw.ImageDraw) -> None:
    for i, h in enumerate([180, 240, 220, 300, 280, 320]):
        x = 80 + i * 55
        d.rectangle([x, 560 - h, x + 45, 560], fill=[RED, BLUE, YELLOW, RED, BLUE, YELLOW][i])
    d.rectangle([720, 280, 1120, 520], fill=BLUE)
    d.ellipse([820, 360, 980, 460], fill=GOLD)


def sebi_fpi_consult(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 180, 220, 560], fill=BLUE)
    d.rectangle([280, 220, 380, 560], fill=RED)
    d.rectangle([100, 560, 400, 580], fill=GOLD)
    d.polygon([(720, 400), (820, 320), (920, 400), (820, 480)], fill=YELLOW)
    d.line([(920, 400), (1120, 400)], fill=GOLD, width=4)
    d.arc([1080, 340, 1160, 420], 270, 90, fill=RED, width=6)


def jlr_byd_defender_court(d: ImageDraw.ImageDraw) -> None:
  # boxy SUV silhouettes + gavel/wedge clash
    d.rectangle([100, 280, 260, 480], fill=BLUE)
    d.rectangle([120, 200, 240, 280], fill=BLUE)
    d.rectangle([300, 300, 460, 480], fill=RED)
    d.rectangle([320, 220, 440, 300], fill=RED)
    d.polygon([(520, 520), (560, 360), (600, 520)], fill=GOLD)
    d.rectangle([540, 300, 560, 360], fill=INK)
    d.ellipse([800, 200, 1140, 560], outline=YELLOW, width=6)
    d.line([(860, 380), (1080, 380)], fill=GOLD, width=3)


def satsure_inspace_avcf(d: ImageDraw.ImageDraw) -> None:
    # satellite arc + crop grid / credit pulse
    d.polygon([(140, 520), (200, 200), (340, 240), (280, 520)], fill=BLUE)
    d.ellipse([210, 180, 270, 240], fill=YELLOW)
    for gx in range(700, 1100, 80):
        for gy in range(220, 520, 80):
            d.rectangle([gx, gy, gx + 50, gy + 50], outline=GOLD, width=2)
    d.polygon([(720, 160), (800, 120), (880, 160), (800, 200)], fill=RED)
    d.line([(800, 200), (800, 560)], fill=GOLD, width=2)


def sebi_fpi_adf_scrap(d: ImageDraw.ImageDraw) -> None:
    # shrinking form stack + open gate
    for i in range(4):
        y = 200 + i * 70
        d.rectangle([120, y, 480, y + 50], fill=[BLUE, RED, YELLOW, BLUE][i])
    d.line([(520, 200), (520, 580)], fill=GOLD, width=3)
    d.arc([640, 260, 1120, 540], 270, 90, fill=RED, width=8)
    d.polygon([(640, 400), (600, 440), (640, 480), (680, 440)], fill=YELLOW)


def indusind_kathpalia_clawback(d: ImageDraw.ImageDraw) -> None:
    # bank facade + pay slips climbing back down
    d.rectangle([100, 180, 460, 560], fill=BLUE)
    d.rectangle([140, 220, 420, 280], fill=CREAM)
    for i, h in enumerate([320, 260, 200, 140]):
        y = 520 - h
        d.rectangle([160, y, 400, y + 40], fill=[RED, YELLOW, RED, YELLOW][i])
    d.polygon([(720, 200), (780, 140), (840, 200), (780, 260)], fill=GOLD)
    d.line([(780, 260), (780, 560)], fill=GOLD, width=3)
    for y in range(280, 520, 60):
        d.polygon([(1080, y), (1120, y - 20), (1120, y + 20)], fill=RED)


def shriram_sensex_rebalance(d: ImageDraw.ImageDraw) -> None:
    # index ladder + swap between two blocks
    for i, h in enumerate([180, 240, 300, 360]):
        x = 120 + i * 70
        d.rectangle([x, 560 - h, x + 50, 560], fill=[BLUE, RED, YELLOW, BLUE][i])
    d.line([(480, 560), (480, 160)], fill=GOLD, width=3)
    d.rectangle([700, 240, 900, 400], fill=YELLOW)
    d.rectangle([940, 320, 1140, 480], fill=RED)
    d.polygon([(820, 300), (900, 240), (900, 360), (820, 300)], fill=BLUE)
    d.polygon([(1080, 460), (1000, 520), (1000, 400)], fill=BLUE)


def titan_helios_luxury_stores(d: ImageDraw.ImageDraw) -> None:
    # storefront + ascending ticket steps
    d.rounded_rectangle([100, 220, 460, 560], radius=20, fill=BLUE)
    d.rectangle([160, 280, 400, 340], fill=GOLD)
    for i, h in enumerate([100, 160, 240, 320]):
        x = 620 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[RED, YELLOW, BLUE, RED][i])
    d.ellipse([980, 200, 1120, 340], fill=YELLOW)
    d.polygon([(1020, 360), (1100, 320), (1100, 400)], fill=GOLD)


def premier_explosives_defence_export(d: ImageDraw.ImageDraw) -> None:
    # shell silhouette + export arrow pipeline
    d.polygon([(200, 520), (260, 200), (320, 520)], fill=RED)
    d.rectangle([230, 280, 290, 440], fill=YELLOW)
    for i, w in enumerate([760, 880, 1000]):
        d.rectangle([w, 280 + i * 80, w + 120, 340 + i * 80], fill=[BLUE, RED, BLUE][i])
        d.polygon([(w + 120, 300 + i * 80), (w + 160, 310 + i * 80), (w + 120, 320 + i * 80)], fill=GOLD)


def india_port_cargo_traffic_oct(d: ImageDraw.ImageDraw) -> None:
    # crane + stacked container bars
    d.rectangle([140, 400, 200, 560], fill=BLUE)
    d.rectangle([200, 360, 480, 400], fill=GOLD)
    d.rectangle([220, 280, 260, 360], fill=RED)
    for i in range(4):
        d.rectangle([640 + i * 110, 480 - i * 50, 720 + i * 110, 560], fill=[YELLOW, RED, BLUE, YELLOW][i])
    d.line([(80, 560), (1180, 560)], fill=INK, width=3)
    d.polygon([(1050, 200), (1120, 240), (1050, 280)], fill=BLUE)


def ashok_leyland_singur_plant(d: ImageDraw.ImageDraw) -> None:
    # factory silhouette + fresh foundation blocks
    d.rectangle([120, 320, 500, 560], fill=BLUE)
    d.polygon([(200, 320), (310, 200), (420, 320)], fill=RED)
    d.rectangle([260, 380, 360, 480], fill=CREAM)
    for i in range(3):
        x = 680 + i * 130
        d.rectangle([x, 440, x + 90, 560], fill=[YELLOW, RED, BLUE][i])
    d.line([(560, 500), (1180, 500)], fill=GOLD, width=4)


def ashok_leyland_ev_cement_trucks(d: ImageDraw.ImageDraw) -> None:
    # electric truck silhouette + cement-bag payload blocks
    d.rectangle([100, 360, 480, 480], fill=BLUE)
    d.ellipse([130, 480, 210, 560], fill=INK)
    d.ellipse([370, 480, 450, 560], fill=INK)
    d.rectangle([240, 280, 340, 360], fill=CREAM)
    d.polygon([(500, 320), (560, 280), (620, 320)], fill=YELLOW)
    for i, h in enumerate([100, 140, 180, 220]):
        x = 700 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, BLUE, YELLOW, RED][i])
    d.ellipse([1000, 360, 1080, 440], fill=GOLD)


def tata_steel_apl_apollo_tubes_sale(d: ImageDraw.ImageDraw) -> None:
    # hollow tubes merge into one downstream stack
    for i in range(5):
        d.rounded_rectangle([100 + i * 55, 260, 140 + i * 55, 520], radius=12, fill=[RED, BLUE, YELLOW, RED, BLUE][i])
    d.rectangle([680, 180, 1140, 540], fill=BLUE)
    d.rectangle([720, 220, 1100, 280], fill=YELLOW)
    d.rectangle([720, 320, 1050, 380], fill=RED)
    d.rectangle([720, 420, 980, 480], fill=YELLOW)
    d.polygon([(600, 340), (660, 300), (660, 380)], fill=GOLD)


def nse_retail_algo_static_ip(d: ImageDraw.ImageDraw) -> None:
    # bracket code left, blocked IP padlock right
    d.rectangle([100, 200, 480, 520], fill=BLUE)
    for y in range(240, 480, 44):
        d.rectangle([140, y, 200, y + 12], fill=YELLOW)
        d.rectangle([220, y, 400, y + 12], fill=CREAM)
    d.ellipse([780, 260, 940, 420], fill=RED)
    d.rectangle([850, 340, 930, 520], fill=RED)
    d.rectangle([820, 300, 900, 340], fill=GOLD)
    d.line([(700, 280), (780, 340)], fill=INK, width=4)
    d.line([(700, 400), (780, 340)], fill=INK, width=4)


def fssai_bisleri_water_court(d: ImageDraw.ImageDraw) -> None:
    # water bottle beside regulator scales
    d.rounded_rectangle([140, 220, 260, 520], radius=30, fill=BLUE)
    d.rectangle([180, 160, 220, 240], fill=BLUE)
    d.ellipse([160, 500, 240, 560], fill=YELLOW)
    d.line([(700, 180), (700, 440)], fill=GOLD, width=6)
    d.line([(620, 260), (780, 260)], fill=GOLD, width=4)
    d.ellipse([630, 200, 690, 260], fill=RED)
    d.ellipse([710, 200, 770, 260], fill=BLUE)
    d.rectangle([900, 320, 1120, 520], fill=RED)
    d.polygon([(960, 320), (1040, 280), (1120, 320)], fill=GOLD)


def kitchenware_aluminium_costs(d: ImageDraw.ImageDraw) -> None:
    # pressure cooker beside rising cost bars
    d.ellipse([180, 360, 360, 540], fill=RED)
    d.rectangle([220, 220, 320, 360], fill=BLUE)
    d.polygon([(240, 200), (300, 160), (360, 200)], fill=YELLOW)
    for i, h in enumerate([100, 160, 220, 280, 340]):
        x = 680 + i * 90
        d.rectangle([x, 560 - h, x + 60, 560], fill=[RED, YELLOW, BLUE, RED, YELLOW][i])
    d.line([(660, 560), (1180, 560)], fill=INK, width=2)


def maruti_select_model_price_hike(d: ImageDraw.ImageDraw) -> None:
    # showroom sticker steps on small car silhouette
    d.rounded_rectangle([120, 320, 460, 420], radius=20, fill=BLUE)
    d.ellipse([160, 420, 240, 500], fill=INK)
    d.ellipse([340, 420, 420, 500], fill=INK)
    for i, h in enumerate([60, 100, 140, 180, 220]):
        x = 640 + i * 85
        d.rectangle([x, 560 - h, x + 55, 560], fill=[RED, YELLOW, BLUE, RED, YELLOW][i])
    d.polygon([(860, 200), (940, 240), (860, 280)], fill=GOLD)


def railtel_andhra_legal_ai_platform(d: ImageDraw.ImageDraw) -> None:
    # law scales merge with cloud server stack
    d.line([(200, 200), (200, 420)], fill=GOLD, width=6)
    d.line([(120, 260), (280, 260)], fill=GOLD, width=4)
    d.ellipse([130, 200, 190, 260], fill=RED)
    d.ellipse([210, 200, 270, 260], fill=BLUE)
    d.rectangle([700, 180, 1120, 520], fill=BLUE)
    for y in range(220, 480, 56):
        d.rectangle([740, y, 1080, y + 32], fill=CREAM if y % 112 else YELLOW)
    d.ellipse([980, 140, 1040, 200], fill=GOLD)


def welspun_living_towel_capex(d: ImageDraw.ImageDraw) -> None:
    # rolled textile stacks beside expanding mill blocks
    for i in range(4):
        d.ellipse([100 + i * 70, 380, 200 + i * 70, 480], fill=[RED, BLUE, YELLOW, RED][i])
    d.rectangle([650, 160, 1150, 560], fill=BLUE)
    d.rectangle([690, 200, 1110, 240], fill=RED)
    d.rectangle([690, 280, 1050, 320], fill=YELLOW)
    d.rectangle([690, 360, 980, 400], fill=RED)
    d.polygon([(1120, 300), (1160, 340), (1120, 380)], fill=GOLD)


def chalet_hotels_taj_delhi_capex(d: ImageDraw.ImageDraw) -> None:
    # hotel tower beside runway light strip
    d.rectangle([140, 180, 380, 560], fill=BLUE)
    for y in range(220, 520, 48):
        d.rectangle([170, y, 350, y + 28], fill=YELLOW if y % 96 else CREAM)
    d.rectangle([700, 480, 1180, 520], fill=INK)
    for x in range(720, 1160, 80):
        d.ellipse([x, 450, x + 24, 474], fill=GOLD)
    d.polygon([(520, 120), (600, 160), (520, 200)], fill=RED)


def bajaj_finance_agentic_ai_scale(d: ImageDraw.ImageDraw) -> None:
    # call-centre arc replaced by bot nodes on a phone stack
    d.rounded_rectangle([100, 200, 420, 560], radius=24, fill=BLUE)
    d.rounded_rectangle([150, 280, 370, 520], radius=16, fill=CREAM)
    for y in range(320, 480, 48):
        d.ellipse([200, y, 260, y + 40], fill=[RED, YELLOW, BLUE][(y // 48) % 3])
    for i, h in enumerate([80, 140, 200, 280, 340, 400]):
        x = 620 + (i % 3) * 100
        row = i // 3
        d.rectangle([x, 520 - h - row * 20, x + 55, 520 - row * 20], fill=[RED, BLUE, YELLOW][i % 3])
    d.polygon([(980, 240), (1100, 200), (1100, 320)], fill=GOLD)


def bwa_crypto_tax_budget(d: ImageDraw.ImageDraw) -> None:
    # ledger blocks + split onshore/offshore paths
    d.rectangle([100, 200, 420, 520], fill=BLUE)
    for i, h in enumerate([80, 120, 160]):
        d.rectangle([140, 480 - h, 380, 500 - h + 60], fill=[RED, YELLOW, RED][i])
    d.ellipse([720, 260, 900, 440], outline=GOLD, width=5)
    d.line([(810, 260), (620, 360), (420, 420)], fill=YELLOW, width=4)
    d.line([(810, 440), (1050, 480)], fill=RED, width=4)
    d.polygon([(1020, 440), (1120, 400), (1120, 520)], fill=BLUE)


def adani_wb_re_rtc(d: ImageDraw.ImageDraw) -> None:
    # sun/wind icons feeding a steady flat line
    d.ellipse([120, 180, 280, 340], fill=YELLOW)
    for ang in range(0, 360, 45):
        x1 = 200 + 90 * math.cos(math.radians(ang))
        y1 = 260 + 90 * math.sin(math.radians(ang))
        x2 = 200 + 120 * math.cos(math.radians(ang))
        y2 = 260 + 120 * math.sin(math.radians(ang))
        d.line([(x1, y1), (x2, y2)], fill=GOLD, width=3)
    d.polygon([(340, 480), (380, 320), (420, 480)], fill=BLUE)
    d.line([(520, 400), (1180, 400)], fill=RED, width=6)
    d.rectangle([900, 420, 1050, 560], fill=BLUE)
    for y in range(430, 550, 24):
        d.rectangle([910, y, 1040, y + 12], fill=YELLOW if y % 48 else CREAM)


def jnpa_gateway_dfc_yard(d: ImageDraw.ImageDraw) -> None:
    # parallel rail tracks splitting to terminals
    d.line([(80, 360), (560, 360)], fill=INK, width=8)
    d.line([(80, 420), (560, 420)], fill=INK, width=8)
    for i, col in enumerate([RED, BLUE, YELLOW, RED, BLUE]):
        x = 620 + i * 95
        d.line([(560, 390), (x, 180 + i * 70)], fill=GOLD, width=3)
        d.rectangle([x, 160 + i * 70, x + 60, 220 + i * 70], fill=col)
    d.rectangle([800, 480, 1160, 560], fill=BLUE)
    d.polygon([(900, 440), (980, 400), (1060, 440)], fill=YELLOW)


def india_bank_unions_strike(d: ImageDraw.ImageDraw) -> None:
    # many small bank facades + calendar strike marker
    for i in range(5):
        x = 100 + i * 95
        d.rectangle([x, 300, x + 70, 520], fill=[RED, BLUE, YELLOW, RED, BLUE][i])
        d.rectangle([x + 10, 340, x + 60, 380], fill=CREAM)
    d.rounded_rectangle([720, 180, 1120, 520], radius=24, outline=GOLD, width=4)
    d.rectangle([780, 240, 1060, 320], fill=RED)
    d.rectangle([780, 360, 1060, 440], fill=BLUE)
    d.rectangle([880, 450, 960, 510], fill=YELLOW)


def noel_tata_board_recording(d: ImageDraw.ImageDraw) -> None:
    # board table + reel/mic motif
    d.ellipse([120, 340, 480, 560], fill=BLUE)
    d.rectangle([180, 380, 420, 420], fill=CREAM)
    d.rectangle([180, 440, 420, 480], fill=CREAM)
    d.ellipse([760, 220, 940, 400], outline=GOLD, width=6)
    for i in range(6):
        ang = i * 60
        x1 = 850 + 70 * math.cos(math.radians(ang))
        y1 = 310 + 70 * math.sin(math.radians(ang))
        x2 = 850 + 90 * math.cos(math.radians(ang))
        y2 = 310 + 90 * math.sin(math.radians(ang))
        d.line([(x1, y1), (x2, y2)], fill=RED, width=4)
    d.rounded_rectangle([980, 420, 1160, 520], radius=16, fill=YELLOW)


def mobikwik_diwali_tier2(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([140, 300, 420, 540], radius=24, fill=BLUE)
    d.ellipse([220, 360, 340, 480], fill=CREAM)
    for idx, (cx, cy) in enumerate([(780, 240), (920, 320), (860, 440), (1020, 380), (740, 480)]):
        d.ellipse([cx - 24, cy - 24, cx + 24, cy + 24], fill=[RED, YELLOW, BLUE, RED, YELLOW][idx])
        d.line([(280, 420), (cx, cy)], fill=GOLD, width=2)


def main() -> None:
    save("infosys-ntt-docomo-jv-november-2026", infosys_ntt_docomo_jv)
    save("india-psb-business-300-lakh-crore-november-2026", psb_business_300_lakh)
    save("india-it-contract-staffing-faster-november-2026", it_contract_staffing)
    save("biocon-pebrilzo-eu-approval-november-2026", biocon_pebrilzo_eu)
    save("sbi-mf-pnb-distribution-november-2026", sbi_mf_pnb_distribution)
    save("gold-loan-federation-rbi-capital-november-2026", gold_loan_fgloc)
    save("prestige-mumbai-andheri-office-jv-november-2026", prestige_mumbai_office)
    save("ndr-auto-dya-hyundai-kia-seats-november-2026", ndr_auto_seats)
    save("reliance-campa-vijayapura-plant-november-2026", reliance_campa_plant)
    save("delhi-hc-gst-corporate-guarantee-november-2026", gst_corporate_guarantee)
    save("rbi-api-governance-cyber-november-2026", rbi_api_cyber)
    save("fairfax-iifl-block-sale-november-2026", fairfax_iifl_block)
    save("groww-ribbit-block-sale-november-2026", groww_ribbit_block)
    save("india-telecom-fake-court-orders-november-2026", telecom_fake_court_orders)
    save("mufin-green-ad-ii-forex-licence-november-2026", mufin_ad_ii_forex)
    save("mahanadi-coalfields-rhp-november-2026", mahanadi_coalfields_ipo)
    save("patanjali-foods-q2-rural-costs-november-2026", patanjali_fmcg_margin)
    save("icici-bank-cad-forecast-fy27-november-2026", icici_cad_forecast)
    save("senco-gold-retail-margin-guide-november-2026", senco_gold_retail)
    save("india-mf-sip-stoppage-october-2026", mf_sip_stoppage)
    save("reliance-andhra-cbg-investment-november-2026", reliance_andhra_cbg)
    save("airtel-payments-bank-ipo-path-november-2026", airtel_payments_bank_ipo)
    save("tata-motors-jlr-restructuring-november-2026", tata_motors_jlr_restruct)
    save("paytm-rbi-ppi-preliminary-november-2026", paytm_rbi_ppi)
    save("hdfc-mf-hybrid-sif-nfo-november-2026", hdfc_hybrid_sif)
    save("abb-india-record-q3-orders-november-2026", abb_record_orders)
    save("tata-trusts-tata-sons-listing-letter-november-2026", tata_trusts_listing)
    save("adani-intellismart-metering-close-november-2026", intellismart_metering)
    save("india-gem-jewellery-exports-october-2026", gem_jewellery_export)
    save("travel-food-airport-sales-november-2026", travel_food_airport)
    save("hul-detergent-mrp-hike-november-2026", hul_detergent_mrp)
    save("veritas-finance-sebi-ipo-november-2026", veritas_finance_ipo)
    save("cbi-future-retail-sbi-fraud-november-2026", cbi_future_retail_fraud)
    save("bank-baroda-mclr-november-2026", bank_baroda_mclr)
    save("makemytrip-india-ipo-sebi-november-2026", makemytrip_india_ipo)
    save("fpi-far-gsec-inflow-november-2026", fpi_far_gsec)
    save("marico-bonorizon-d2c-stake-november-2026", marico_bonorizon)
    save("international-mutual-fund-inflow-lock-november-2026", intl_mf_gate)
    save("india-small-satellite-launchers-november-2026", india_small_launchers)
    save("lt-noida-metro-aqua-extension-november-2026", lt_noida_metro)
    save("airtel-prepaid-299-return-november-2026", airtel_299_return)
    save("railways-passenger-schedule-redress-november-2026", railways_schedule_redress)
    save("nse-digital-gold-egr-target-november-2026", nse_digital_gold_egr)
    save("diwali-gift-tax-threshold-november-2026", diwali_gift_tax)
    save("tata-chemicals-soda-ash-q2-november-2026", tata_chemicals_soda)
    save("aster-dm-merger-q2-occupancy-november-2026", aster_dm_merger)
    save("titan-q2-jewellery-watches-november-2026", titan_q2_jewellery)
    save("lg-electronics-india-q2-appliances-november-2026", lg_appliances_q2)
    save("bikaji-snacks-growth-margin-squeeze-november-2026", bikaji_snacks_margin)
    save("bharti-airtel-q2-network-costs-november-2026", airtel_q2_network)
    save("festive-dhanteras-online-sales-november-2026", festive_dhanteras_online)
    save("kotak-deutsche-cci-approval-november-2026", kotak_deutsche)
    save("india-household-retail-credit-stress-november-2026", household_credit)
    save("page-industries-plant-expansion-november-2026", page_industries)
    save("ntpc-capacity-149gw-roadmap-november-2026", ntpc_capacity)
    save("nlmc-psu-land-monetization-november-2026", nlmc_land)
    save("stockal-unauthorized-trading-fraud-november-2026", stockal_fraud)
    save("himachal-court-sbi-salary-freeze-november-2026", himachal_freeze)
    save("pnb-canara-november-fd-rates-november-2026", pnb_canara_fd)
    save("sebi-eki-energy-md-bar-october-2026", sebi_eki_energy_bar)
    save("india-tax-devolution-festive-october-2026", tax_devolution_festive)
    save("lpg-under-recovery-december-370-october-2026", lpg_under_recovery_dec)
    save("cci-niel-vodafone-deals-october-2026", cci_niel_vodafone)
    save("emirates-resist-navi-mumbai-shift-october-2026", emirates_navi_resist)
    save("meity-depa-ai-training-handbook-october-2026", meity_depa_ai)
    save("india-scotch-bulk-import-tariff-dispute-october-2026", scotch_tariff_dispute)
    save("escorts-kubota-tractor-prices-november-2026", escorts_kubota_tractor)
    save("igl-railway-png-lpg-replacement-october-2026", igl_railway_png)
    save("muthoot-finance-gold-loan-q2-october-2026", muthoot_gold_loan)
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
    save("affle-perion-acquisition-november-2026", affle_perion_acquisition)
    save("maruti-west-asia-shipping-disruption-november-2026", maruti_west_asia_shipping)
    save("power-grid-q2-dividend-november-2026", power_grid_q2_dividend)
    save("lic-housing-loan-rate-hikes-november-2026", lic_housing_loan_rates)
    save("coal-india-power-supply-record-october-2026", coal_india_power_supply)
    save("festive-auto-wholesale-october-2026", festive_auto_wholesale)
    save("irdai-scale-based-regulation-november-2026", irdai_scale_regulation)
    save("reliance-o2c-export-routes-q2-october-2026", reliance_export_routes)
    save("corporate-offsite-travel-rebound-october-2026", corporate_offsite_travel)
    save("strides-pharma-ex-us-revenue-q2-october-2026", strides_ex_us)
    save("ramkrishna-forgings-cv-demand-q2-october-2026", ramkrishna_forgings_cv)
    save("ambuja-cement-capex-expansion-november-2026", ambuja_cement_capex)
    save("india-residential-sales-value-outpace-volume-november-2026", residential_sales_value)
    save("igl-q2-expense-squeeze-november-2026", igl_expense_squeeze)
    save("reliance-independence-biscuits-tamil-nadu-november-2026", reliance_independence_biscuits)
    save("motherson-sumi-wiring-premiumisation-q2-november-2026", motherson_wiring_content)
    save("india-manufacturing-pmi-october-slowdown-november-2026", india_pmi_october)
    save("man-infra-epc-orders-november-2026", man_infra_epc_orders)
    save("trident-textile-capex-november-2026", trident_textile_capex)
    save("medanta-hospital-volumes-november-2026", medanta_hospital_volumes)
    save("happiest-minds-itc-infotech-merger-november-2026", happiest_minds_itc_merger)
    save("vmart-q2-loss-november-2026", vmart_q2_loss)
    save("gujarat-energy-cbg-biogas-jv-november-2026", gujarat_energy_cbg)
    save("tpg-arka-fincap-secured-lending-november-2026", tpg_arka_fincap)
    save("ongc-venezuela-operatorship-november-2026", ongc_venezuela)
    save("makemytrip-quick-ride-pooling-november-2026", makemytrip_quick_ride)
    save("india-domestic-air-demand-soft-november-2026", domestic_air_soft)
    save("medical-devices-pli-2-november-2026", medical_devices_pli)
    save("spicejet-winter-cancellations-november-2026", spicejet_winter_cancel)
    save("indigo-saudi-route-suspension-november-2026", indigo_saudi_suspension)
    save("india-plfs-q2-unemployment-november-2026", plfs_q2_unemployment)
    save("cochin-shipyard-repair-mix-november-2026", cochin_shipyard_repair_mix)
    save("jyoti-structures-nclat-guarantees-november-2026", jyoti_structures_guarantees)
    save("patna-municipal-bond-november-2026", patna_municipal_bond)
    save("bajaj-finance-qip-november-2026", bajaj_finance_qip)
    save("india-fertiliser-subsidy-winter-november-2026", india_fertiliser_winter)
    save("amex-reward-points-reversal-november-2026", amex_reward_reversal)
    save("tata-power-shirwata-pumped-storage-november-2026", tata_power_pumped_storage)
    save("india-alcobev-packaging-cost-west-asia-november-2026", india_alcobev_packaging)
    save("india-scotch-customs-ministries-meet-november-2026", india_scotch_customs_meet)
    save("singapore-airlines-air-india-losses-november-2026", singapore_airlines_air_india)
    save("rbi-pe-nbfc-ownership-curbs-november-2026", rbi_pe_nbfc_curbs)
    save("nbfc-rural-underwriting-drought-november-2026", nbfc_rural_drought)
    save("beml-indigenous-tunnel-boring-november-2026", beml_tunnel_boring)
    save("msci-india-em-weight-november-2026", msci_india_em_weight)
    save("bhel-gujarat-renewable-transmission-november-2026", bhel_gujarat_re_transmission)
    save("hfcl-optical-fibre-export-orders-november-2026", hfcl_ofc_export)
    save("india-onion-e-auction-mjunction-november-2026", india_onion_e_auction)
    save("pricol-memory-chip-cost-pressure-november-2026", pricol_memory_pressure)
    save("india-coal-gasification-round-two-november-2026", india_coal_gasification_round2)
    save("india-liquor-karnataka-tamil-nadu-q2-november-2026", india_liquor_karnataka_tn)
    save("india-pli-bess-10gwh-grid-shortlist-november-2026", pli_bess_grid_shortlist)
    save("vodafone-idea-q2-funding-capex-november-2026", vodafone_idea_q2_funding)
    save("yatra-corporate-mice-air-split-november-2026", yatra_mice_air_split)
    save("ashok-leyland-mhcv-q2-november-2026", ashok_leyland_mhcv_q2)
    save("pvr-inox-global-distribution-november-2026", pvr_inox_global_distribution)
    save("india-us-trade-pact-last-stretch-november-2026", india_us_trade_pact_last_stretch)
    save("maharashtra-atf-vat-extension-november-2026", maharashtra_atf_vat_extension)
    save("ongc-vedanta-cambay-takeover-november-2026", ongc_vedanta_cambay)
    save("liquor-excise-price-requests-november-2026", liquor_excise_price_push)
    save("titan-jewellery-buyer-recovery-november-2026", titan_jewellery_buyer_push)
    save("city-union-bank-neft-shutdown-november-2026", city_union_neft_shutdown)
    save("bajaj-finance-qip-allotment-november-2026", bajaj_finance_qip_allotment)
    save("india-bulk-scotch-162-duty-november-2026", india_bulk_scotch_162_duty)
    save("india-defence-capex-budget-ask-november-2026", india_defence_capex_budget_ask)
    save("india-upi-merchant-fee-still-open-november-2026", india_upi_merchant_fee_open)
    save("go-digit-gift-city-ifsca-november-2026", go_digit_gift_city_ifsca)
    save("india-refinery-throughput-october-2026", india_refinery_throughput_october)
    save("coal-india-rare-earth-magnet-loi-november-2026", coal_india_rare_earth_magnet_loi)
    save("ashoka-buildcon-diriyah-cancel-november-2026", ashoka_diriyah_cancel)
    save("ctrls-bihar-datacentre-november-2026", ctrls_bihar_dc)
    save("waaree-solapur-solar-storage-november-2026", waaree_solapur_storage)
    save("india-infrastructure-output-october-2026", iip_october)
    save("sebi-fpi-consultation-simplify-november-2026", sebi_fpi_consult)
    save("mobikwik-diwali-tier2-payments-november-2026", mobikwik_diwali_tier2)
    save("jlr-byd-defender-design-court-november-2026", jlr_byd_defender_court)
    save("satsure-inspace-avcf-november-2026", satsure_inspace_avcf)
    save("sebi-fpi-adf-scrap-november-2026", sebi_fpi_adf_scrap)
    save("titan-helios-luxury-watch-stores-november-2026", titan_helios_luxury_stores)
    save("premier-explosives-defence-export-november-2026", premier_explosives_defence_export)
    save("india-port-cargo-traffic-october-2026", india_port_cargo_traffic_oct)
    save("ashok-leyland-singur-truck-plant-november-2026", ashok_leyland_singur_plant)
    save("tata-steel-apl-apollo-tubes-sale-november-2026", tata_steel_apl_apollo_tubes_sale)
    save("nse-retail-algo-static-ip-november-2026", nse_retail_algo_static_ip)
    save("fssai-bisleri-water-court-november-2026", fssai_bisleri_water_court)
    save("kitchenware-aluminium-costs-november-2026", kitchenware_aluminium_costs)
    save("maruti-select-model-price-hike-november-2026", maruti_select_model_price_hike)
    save("railtel-andhra-legal-ai-platform-november-2026", railtel_andhra_legal_ai_platform)
    save("welspun-living-towel-capex-november-2026", welspun_living_towel_capex)
    save("chalet-hotels-taj-delhi-capex-november-2026", chalet_hotels_taj_delhi_capex)
    save("ashok-leyland-ev-cement-trucks-november-2026", ashok_leyland_ev_cement_trucks)
    save("bajaj-finance-agentic-ai-scale-november-2026", bajaj_finance_agentic_ai_scale)
    save("bwa-crypto-tax-budget-2027-november-2026", bwa_crypto_tax_budget)
    save("adani-energy-wb-round-the-clock-power-november-2026", adani_wb_re_rtc)
    save("jnpa-gateway-distriparks-dfc-yard-november-2026", jnpa_gateway_dfc_yard)
    save("india-bank-unions-idbi-strike-december-2026", india_bank_unions_strike)
    save("indusind-kathpalia-clawback-november-2026", indusind_kathpalia_clawback)
    save("shriram-finance-sensex-replaces-trent-november-2026", shriram_sensex_rebalance)
    save("noel-tata-board-recording-letter-november-2026", noel_tata_board_recording)
    save("adani-airport-holdings-equity-november-2026", adani_airport_holdings_equity)
    save("ptc-industries-titanium-defence-order-november-2026", ptc_titanium_defence)
    save("physicswallah-digital-university-patiala-november-2026", physicswallah_digital_univ)
    save("jupiter-woojin-metro-coaches-november-2026", jupiter_woojin_metro)
    save("sebi-ipo-grey-market-premium-november-2026", sebi_ipo_gmp)
    save("rbi-micro-enterprise-credit-november-2026", rbi_micro_enterprise)
    save("lupin-usfda-ferric-citrate-november-2026", lupin_ferric_citrate)
    save("spicejet-alpa-dgca-oversight-november-2026", spicejet_alpa_dgca)
    save("foodlink-fnb-ipo-band-november-2026", foodlink_ipo_band)


def sebi_ipo_gmp(d: ImageDraw.ImageDraw) -> None:
    # opaque market whisper vs lit exchange book
    d.rectangle([100, 200, 480, 520], fill=BLUE)
    for i in range(4):
        d.rectangle([140 + i * 80, 260, 200 + i * 80, 460], fill=[YELLOW, RED, GOLD, YELLOW][i])
    d.ellipse([820, 280, 1100, 560], fill=CREAM, outline=GOLD, width=4)
    d.line([(900, 400), (1020, 400)], fill=RED, width=6)
    d.line([(820, 420), (1100, 420)], fill=BLUE, width=3)
    d.polygon([(720, 200), (760, 260), (720, 320)], fill=GOLD)


def rbi_micro_enterprise(d: ImageDraw.ImageDraw) -> None:
    # many small tiles vs one large block
    for row in range(4):
        for col in range(5):
            x = 80 + col * 72
            y = 200 + row * 72
            d.rectangle([x, y, x + 56, y + 56], fill=[RED, BLUE, YELLOW, GOLD][(row + col) % 4])
    d.rectangle([700, 240, 1120, 520], fill=BLUE)
    d.rectangle([760, 300, 1060, 460], fill=RED)
    d.line([(700, 520), (1120, 520)], fill=GOLD, width=3)


def lupin_ferric_citrate(d: ImageDraw.ImageDraw) -> None:
    # tablet stack + kidney curve motif
    for i in range(5):
        d.rounded_rectangle([120, 400 - i * 30, 280, 480 - i * 30], radius=12, fill=[RED, BLUE, YELLOW, GOLD, RED][i])
    d.arc([760, 220, 1080, 540], 200, 340, fill=BLUE, width=16)
    d.ellipse([880, 320, 960, 400], fill=YELLOW)


def spicejet_alpa_dgca(d: ImageDraw.ImageDraw) -> None:
    # runway + scale imbalance
    d.rectangle([100, 420, 600, 480], fill=INK)
    d.polygon([(100, 420), (600, 420), (560, 380)], fill=GOLD)
    d.rectangle([720, 200, 780, 520], fill=BLUE)
    d.rectangle([1020, 280, 1080, 520], fill=RED)
    d.line([(780, 360), (1020, 360)], fill=GOLD, width=4)
    d.ellipse([730, 180, 770, 220], fill=YELLOW)
    d.ellipse([1030, 240, 1070, 280], fill=YELLOW)


def foodlink_ipo_band(d: ImageDraw.ImageDraw) -> None:
    # banquet hall + stepped price band
    d.polygon([(120, 520), (120, 300), (320, 220), (520, 300), (520, 520)], fill=RED)
    d.rectangle([200, 360, 440, 400], fill=GOLD)
    for i, h in enumerate([80, 120, 160, 200, 240]):
        x = 680 + i * 70
        d.rectangle([x, 520 - h, x + 50, 520], fill=[BLUE, YELLOW, RED, GOLD, BLUE][i])
    d.line([(660, 520), (1120, 520)], fill=INK, width=2)


def adani_airport_holdings_equity(d: ImageDraw.ImageDraw) -> None:
    # terminal silhouette + equity stack blocks
    d.polygon([(160, 560), (160, 280), (280, 200), (400, 280), (400, 560)], fill=BLUE)
    d.rectangle([220, 320, 340, 380], fill=YELLOW)
    for i, h in enumerate([100, 160, 220, 280]):
        x = 720 + i * 100
        d.rectangle([x, 560 - h, x + 70, 560], fill=[RED, GOLD, BLUE, YELLOW][i])
    d.line([(700, 560), (1150, 560)], fill=INK, width=2)
    d.polygon([(320, 220), (280, 180), (360, 180)], fill=GOLD)


def ptc_titanium_defence(d: ImageDraw.ImageDraw) -> None:
    # ingot stack + shield outline
    for i in range(3):
        d.rounded_rectangle(
            [140 + i * 50, 360 - i * 40, 320 + i * 50, 560],
            radius=16,
            fill=[(180, 185, 192), BLUE, RED][i],
        )
    d.polygon([(880, 220), (980, 280), (980, 480), (880, 540), (780, 480), (780, 280)], fill=YELLOW)
    d.rectangle([820, 320, 940, 400], fill=BLUE)
    d.line([(700, 560), (1100, 560)], fill=GOLD, width=3)


def physicswallah_digital_univ(d: ImageDraw.ImageDraw) -> None:
    # open book + connected nodes
    d.polygon([(120, 320), (260, 240), (400, 320), (400, 520), (120, 520)], fill=RED)
    d.polygon([(260, 240), (400, 320), (260, 400)], fill=BLUE)
    d.line([(260, 400), (260, 520)], fill=GOLD, width=4)
    for i, (x, y) in enumerate([(720, 300), (900, 220), (1080, 300), (900, 420)]):
        d.ellipse([x - 40, y - 40, x + 40, y + 40], fill=[YELLOW, BLUE, RED, GOLD][i])
        if i < 3:
            d.line([(x + 40, y), (720 + (i + 1) * 180 - 40, [300, 220, 300][i])], fill=GOLD, width=2)


def jupiter_woojin_metro(d: ImageDraw.ImageDraw) -> None:
    # metro coach + rail chevrons
    d.rounded_rectangle([100, 360, 500, 520], radius=24, fill=RED)
    d.rectangle([140, 400, 220, 480], fill=YELLOW)
    d.rectangle([300, 400, 380, 480], fill=BLUE)
    d.ellipse([140, 500, 200, 560], fill=INK)
    d.ellipse([400, 500, 460, 560], fill=INK)
    for i in range(5):
        d.polygon([(640 + i * 90, 520), (680 + i * 90, 440), (720 + i * 90, 520)], fill=[GOLD, RED, BLUE, YELLOW, GOLD][i])


def modi_india_inc_wages(d: ImageDraw.ImageDraw) -> None:
    for i in range(4):
        d.rectangle([100 + i * 55, 420 - i * 25, 145 + i * 55, 520], fill=[BLUE, YELLOW, RED, GOLD][i])
    d.rectangle([680, 280, 1120, 520], fill=RED)
    d.rectangle([740, 340, 1060, 400], fill=GOLD)
    for i, h in enumerate([60, 100, 140, 220]):
        x = 720 + i * 90
        d.rectangle([x, 520 - h, x + 55, 520], fill=[BLUE, YELLOW, BLUE, RED][i])


def irdai_ombudsman_panel(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([200, 180, 260, 520], fill=BLUE)
    d.rectangle([340, 180, 400, 520], fill=BLUE)
    d.line([(100, 280), (500, 280)], fill=GOLD, width=4)
    d.ellipse([220, 200, 380, 280], fill=YELLOW)
    d.polygon([(900, 520), (900, 300), (1050, 260), (1050, 520)], fill=RED)
    d.rectangle([780, 360, 860, 440], fill=BLUE)
    d.rectangle([780, 460, 860, 540], fill=YELLOW)


def adani_nashik_toll_road(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 320, 520, 380], fill=BLUE)
    d.rectangle([180, 220, 220, 320], fill=GOLD)
    d.rectangle([420, 220, 460, 320], fill=GOLD)
    d.polygon([(520, 380), (620, 280), (720, 380)], fill=RED)
    for i, h in enumerate([40, 70, 100, 130, 160]):
        x = 780 + i * 65
        d.rectangle([x, 520 - h, x + 45, 520], fill=[YELLOW, RED, BLUE, GOLD, YELLOW][i])


def sbi_ecowrap_rbi_25bps(d: ImageDraw.ImageDraw) -> None:
    d.ellipse([120, 200, 440, 520], fill=CREAM, outline=GOLD, width=6)
    d.line([(280, 360), (340, 260)], fill=RED, width=8)
    d.ellipse([275, 255, 295, 275], fill=BLUE)
    for i, y in enumerate([240, 300, 360, 420]):
        d.rectangle([700, y, 1050, y + 24], fill=[BLUE, YELLOW, RED, GOLD][i])


def rural_confidence_gram_panchayat(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 420, 480, 500], fill=BLUE)
    d.rectangle([180, 360, 420, 420], fill=YELLOW)
    for i, h in enumerate([140, 100, 80, 60]):
        x = 140 + i * 70
        d.rectangle([x, 520 - h, x + 50, 520], fill=[RED, GOLD, RED, BLUE][i])
    d.ellipse([820, 240, 1100, 520], fill=CREAM, outline=GOLD, width=4)
    d.rectangle([880, 400, 1040, 460], fill=RED)
    d.ellipse([900, 460, 960, 520], fill=INK)
    d.ellipse([1000, 460, 1060, 520], fill=INK)


def india_aluminium_import_duty(d: ImageDraw.ImageDraw) -> None:
    for i in range(4):
        d.rounded_rectangle(
            [100 + i * 45, 380 - i * 35, 240 + i * 45, 560],
            radius=12,
            fill=[(180, 185, 192), BLUE, RED, YELLOW][i],
        )
    d.rectangle([700, 200, 760, 520], fill=GOLD)
    d.polygon([(760, 280), (1080, 240), (1080, 460), (760, 500)], fill=RED)
    d.line([(820, 320), (1020, 320)], fill=BLUE, width=6)
    d.line([(820, 400), (980, 400)], fill=YELLOW, width=6)


def rbi_sbi_mf_south_indian_bank(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([140, 200, 460, 520], fill=BLUE)
    d.rectangle([200, 280, 400, 340], fill=GOLD)
    d.rectangle([200, 380, 400, 440], fill=CREAM)
    for i, h in enumerate([80, 110, 140, 170]):
        x = 720 + i * 85
        d.rectangle([x, 520 - h, x + 55, 520], fill=[RED, YELLOW, BLUE, GOLD][i])
    d.ellipse([900, 220, 1060, 300], fill=YELLOW)


def tata_motors_passenger_dec_prices(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 380, 520, 480], radius=28, fill=RED)
    d.rectangle([180, 420, 260, 460], fill=YELLOW)
    d.rectangle([360, 420, 440, 460], fill=BLUE)
    d.ellipse([200, 480, 260, 540], fill=INK)
    d.ellipse([400, 480, 460, 540], fill=INK)
    for i, h in enumerate([50, 70, 90, 110, 130]):
        x = 700 + i * 70
        d.rectangle([x, 520 - h, x + 48, 520], fill=[GOLD, RED, BLUE, YELLOW, GOLD][i])


def teamlease_epfo_demand(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([160, 260, 440, 520], fill=BLUE)
    d.rectangle([220, 320, 380, 400], fill=CREAM)
    d.rectangle([220, 440, 380, 500], fill=YELLOW)
    d.polygon([(780, 520), (900, 200), (1020, 520)], fill=RED)
    d.rectangle([820, 360, 980, 420], fill=GOLD)
    d.line([(700, 520), (1100, 520)], fill=INK, width=3)


def auto_pli_disbursements_fy27(d: ImageDraw.ImageDraw) -> None:
  for i, h in enumerate([60, 120, 200, 280, 340]):
    x = 120 + i * 72
    d.rectangle([x, 520 - h, x + 52, 520], fill=[BLUE, YELLOW, RED, GOLD, BLUE][i])
  d.rounded_rectangle([640, 260, 1120, 480], radius=20, fill=RED)
  d.line([(680, 360), (1080, 360)], fill=GOLD, width=5)
  d.polygon([(900, 200), (980, 260), (900, 320)], fill=YELLOW)


def tamil_nadu_chennai_investment(d: ImageDraw.ImageDraw) -> None:
  d.rectangle([140, 220, 220, 520], fill=BLUE)
  d.rectangle([300, 280, 380, 520], fill=BLUE)
  d.line([(100, 400), (420, 400)], fill=GOLD, width=4)
  for i in range(4):
    d.rectangle([720 + i * 85, 500 - (80 + i * 35), 775 + i * 85, 500], fill=[RED, YELLOW, BLUE, GOLD][i])
  d.ellipse([880, 240, 1100, 460], outline=GOLD, width=5)


def india_alcobev_rtd_growth(d: ImageDraw.ImageDraw) -> None:
  d.rounded_rectangle([140, 300, 220, 520], radius=36, fill=BLUE)
  d.rounded_rectangle([260, 340, 340, 520], radius=36, fill=RED)
  d.rectangle([180, 240, 300, 300], fill=YELLOW)
  for i, x in enumerate([720, 840, 960, 1080]):
    d.ellipse([x - 36, 360 - i * 20, x + 36, 432 - i * 20], fill=[GOLD, RED, BLUE, YELLOW][i])


def bank_of_baroda_upi_mdr(d: ImageDraw.ImageDraw) -> None:
  d.rounded_rectangle([120, 280, 480, 520], radius=28, fill=BLUE)
  d.polygon([(260, 360), (340, 400), (260, 440), (180, 400)], fill=YELLOW)
  d.line([(700, 520), (1100, 520)], fill=INK, width=2)
  for i, h in enumerate([40, 80, 120, 160]):
    x = 740 + i * 80
    d.rectangle([x, 520 - h, x + 50, 520], fill=[RED, GOLD, BLUE, YELLOW][i])
  d.polygon([(1020, 220), (1100, 280), (1020, 340)], fill=RED)


def niif_infrastructure_bonds(d: ImageDraw.ImageDraw) -> None:
  d.rectangle([140, 320, 480, 520], fill=RED)
  d.rectangle([200, 260, 420, 320], fill=GOLD)
  d.line([(200, 380), (420, 440)], fill=BLUE, width=6)
  for i in range(5):
    y = 300 + i * 36
    d.rectangle([700, y, 1120, y + 20], fill=[BLUE, YELLOW, RED, GOLD, BLUE][i])
  d.polygon([(820, 180), (900, 240), (820, 300)], fill=YELLOW)


def phonepe_ipo_restart(d: ImageDraw.ImageDraw) -> None:
    d.rounded_rectangle([120, 260, 460, 520], radius=32, fill=BLUE)
    d.ellipse([220, 340, 360, 440], fill=YELLOW)
    for i, h in enumerate([90, 140, 200, 260, 300]):
        x = 700 + i * 75
        d.rectangle([x, 520 - h, x + 52, 520], fill=[RED, GOLD, BLUE, YELLOW, RED][i])
    d.polygon([(980, 200), (1060, 260), (980, 320)], fill=GOLD)


def shadowfax_wefast_buy(d: ImageDraw.ImageDraw) -> None:
    for i, x in enumerate([140, 260, 380]):
        d.polygon([(x + 40, 520), (x, 420), (x + 80, 420)], fill=[RED, BLUE, YELLOW][i])
    d.line([(640, 400), (1080, 400)], fill=GOLD, width=5)
    for i in range(4):
        d.ellipse([720 + i * 90, 280, 780 + i * 90, 340], fill=[BLUE, YELLOW, RED, GOLD][i])


def wipro_bp_finance_ops(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([120, 280, 480, 520], fill=BLUE)
    for y in range(320, 480, 40):
        d.rectangle([160, y, 440, y + 22], fill=[CREAM, YELLOW, CREAM, YELLOW][(y // 40) % 4])
    d.rectangle([640, 300, 1100, 360], fill=RED)
    d.rectangle([640, 400, 1050, 460], fill=YELLOW)
    d.polygon([(900, 220), (1040, 260), (900, 300)], fill=GOLD)


def suzlon_thoothukudi_blade(d: ImageDraw.ImageDraw) -> None:
    d.polygon([(300, 520), (340, 180), (380, 520)], fill=BLUE)
    d.polygon([(360, 520), (400, 200), (440, 520)], fill=RED)
    d.rectangle([200, 480, 440, 520], fill=YELLOW)
    for i, h in enumerate([100, 150, 200]):
        x = 720 + i * 100
        d.rectangle([x, 520 - h, x + 70, 520], fill=[GOLD, RED, BLUE][i])


def pnb_deutsche_acquisition_financing(d: ImageDraw.ImageDraw) -> None:
    d.rectangle([140, 320, 460, 520], fill=RED)
    d.rectangle([200, 260, 400, 320], fill=GOLD)
    d.line([(700, 520), (700, 300)], fill=BLUE, width=8)
    d.line([(700, 400), (1100, 400)], fill=GOLD, width=5)
    d.polygon([(980, 340), (1100, 400), (980, 460)], fill=YELLOW)


if __name__ == "__main__":
    main()
    save("phonepe-ipo-restart-november-2026", phonepe_ipo_restart)
    save("shadowfax-wefast-borzo-acquisition-november-2026", shadowfax_wefast_buy)
    save("wipro-bp-finance-operations-november-2026", wipro_bp_finance_ops)
    save("suzlon-thoothukudi-blade-factory-november-2026", suzlon_thoothukudi_blade)
    save("pnb-deutsche-acquisition-financing-mou-november-2026", pnb_deutsche_acquisition_financing)
    save("rural-confidence-gram-panchayat-grants-november-2026", rural_confidence_gram_panchayat)
    save("india-aluminium-import-duty-budget-ask-november-2026", india_aluminium_import_duty)
    save("rbi-sbi-mf-south-indian-bank-stake-november-2026", rbi_sbi_mf_south_indian_bank)
    save("tata-motors-passenger-prices-december-november-2026", tata_motors_passenger_dec_prices)
    save("teamlease-epfo-provident-fund-demand-november-2026", teamlease_epfo_demand)
    save("auto-pli-disbursements-accelerate-fy27-november-2026", auto_pli_disbursements_fy27)
    save("tamil-nadu-chennai-investment-mou-november-2026", tamil_nadu_chennai_investment)
    save("india-alcobev-rtd-growth-november-2026", india_alcobev_rtd_growth)
    save("bank-of-baroda-upi-mdr-reinvest-november-2026", bank_of_baroda_upi_mdr)
    save("niif-infrastructure-bonds-november-2026", niif_infrastructure_bonds)
