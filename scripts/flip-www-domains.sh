#!/usr/bin/env bash
# Swap Vercel project domains: www → Pramaan, legacy → pramaan.pocketedge.in
# Requires: vercel login (team Kushagra's projects)
set -euo pipefail
TEAM="kushagras-projects-cb9b3d6f"
SOCIAL="social-pocketedge"
PRAMAAN="pramaan"
PRAMAAN_ID="prj_V1TjwsJUpwpz88IjDjRH2XjTeSwZ"
SOCIAL_ID="prj_tY6Y1XKJiuyjAX4bV8oTrIfC25mH"

api() {
  vercel api "$1" --method "$2" --scope "$TEAM" "${@:3}"
}

move() {
  local from="$1" domain="$2" to_id="$3"
  echo "Move $domain: $from → project $to_id"
  api "/v1/projects/$from/domains/$domain/move" POST --input "{\"projectId\":\"$to_id\"}"
}

echo "Moving www + apex to $PRAMAAN..."
move "$SOCIAL" "www.pocketedge.in" "$PRAMAAN_ID"
move "$SOCIAL" "pocketedge.in" "$PRAMAAN_ID"

echo "Re-attach apex redirect on $PRAMAAN (if move cleared redirect)..."
api "/v10/projects/$PRAMAAN/domains" POST --input '{"name":"pocketedge.in","redirect":"www.pocketedge.in","redirectStatusCode":308}' || true

echo "Moving pramaan.pocketedge.in to $SOCIAL..."
move "$PRAMAAN" "pramaan.pocketedge.in" "$SOCIAL_ID"

echo "Done. Redeploy pramaan + social-pocketedge if needed."
