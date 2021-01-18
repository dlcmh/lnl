# http://stackoverflow.com/questions/7114990/pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-terminal/21761956#21761956
# 'EOF' -> so that bash recognizes the heredoc as a nowdoc, turning off local variable interpolation so that the command text will be passed as-is to ssh

# http://stackoverflow.com/questions/7114990/pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-terminal/21221449#21221449
# -T -> so as not to get the message 'Pseudo-terminal will not be allocated because stdin is not a terminal.'
# Alternatively, can run ssh -T dakerr.com "bash -s" <<- 'EOF', but would then need to
# run source $HOME/.bash_profile

# <<- suppresses tabs

# On stronghosting.net, will read from .bash_profile by default

# https://stackoverflow.com/questions/48648572/how-to-deal-with-pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-t
# rails assets:precompile -> yarn & bin/webpack --progress --profile
ssh -tt dakerr5 <<- 'EOF'
  echo "These commands will be run on: $( uname -a )"
  echo "They are executed by: $( whoami ) on $(hostname) $(hostname -i)"
  cd apps/dakerr/lnl
  git fetch origin --prune
  git reset --hard origin/main
  pnpm build
  procsd restart
  exit
EOF
