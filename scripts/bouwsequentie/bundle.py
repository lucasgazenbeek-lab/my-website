# -*- coding: utf-8 -*-
"""Bundelt scenes.json, copy.json en parts.json tot de JSON die de app leest."""
import json, os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT  = os.path.join(HERE, "..", "..", "lib", "bouwsequentie")

S  = json.load(open(os.path.join(HERE, "scenes.json")))
P  = json.load(open(os.path.join(HERE, "parts.json")))
MS = json.load(open(os.path.join(HERE, "phases.json")))
EX = json.load(open(os.path.join(HERE, "copy.json")))
PH = {"ms": MS, "hs": EX["hs"], "co": EX["co"]}

ORDER = ["ground","ext","civil","extra","shadows","cable","cont","stat",
         "plan","plotmark","dims","air","labels","labels2","hits"]

os.makedirs(OUT, exist_ok=True)
index = {"viewBox": "0 0 900 560", "css": P["css"],
         "volgorde": ["ms","hs","co"], "varianten": {}}
for k in ("ms","hs","co"):
    m = P["meta"][k]
    index["varianten"][k] = {"naam": m["naam"], "sub": m["sub"],
                             "kader": m["kader"], "laatsteFase": m["last"],
                             "specs": P["specs"][k]}
    json.dump({"lagen": {n: S[k][n] for n in ORDER if S[k].get(n)},
               "fasen": PH[k], "data": m["data"]},
              open(os.path.join(OUT, k + ".json"), "w"),
              ensure_ascii=False, separators=(",", ":"))
json.dump(index, open(os.path.join(OUT, "index.json"), "w"),
          ensure_ascii=False, separators=(",", ":"))
print("geschreven naar", os.path.normpath(OUT))
