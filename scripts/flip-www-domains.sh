#!/usr/bin/env bash
# Swap Vercel project domains for the www flip. Requires: vercel login (team Kushagra's projects).
set -euo pipefail
TEAM="kushagras-projects-cb9b3d6f"
SOCIAL="social-pocketedge"
PRAMAAN="pramaan"

api() {
  vercel api "$1" --method "$2" --scope "$TEAM" "${@:3}"
}

echo "Removing www + apex from $SOCIAL..."
api "/v9/projects/$SOCIAL/domains/www.pocketedge.in" DELETE
api "/v9/projects/$SOCIAL/domains/pocketedge.in" DELETE

echo "Removing pramaan host from $PRAMAAN..."
api "/v9/projects/$PRAMAAN/domains/pramaan.pocketedge.in" DELETE

echo "Adding www + apex to $PRAMAAN..."
api "/v10/projects/$PRAMAAN/domains" POST --input '{"name":"www.pocketedge.in"}'
api "/v10/projects/$PRAMAAN/domains" POST --input '{"name":"pocketedge.in","redirect":"www.pocketedge.in","redirectStatusCode":308}'

echo "Adding legacy host to $SOCIAL..."
api "/v10/projects/$SOCIAL/domains" POST --input '{"name":"pramaan.pocketedge.in"}'

echo "Done. Redeploy both projects from the Vercel dashboard or git push."
