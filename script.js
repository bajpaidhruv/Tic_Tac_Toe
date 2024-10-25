arr = Array(9).fill(null);
        let currentPlayer = 'X';
        
        function checkWiner() {
            if (
                (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
                (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
                (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
                (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
                (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
                (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
                (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
                (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
            ) {
                document.body.innerHTML = `
                    <div class="win-screen">
                        <div class="win-text">
                            ${currentPlayer} Wins!
                        </div>
                        <button onclick="location.reload()" class="play-again-btn">
                            Play Again
                        </button>
                    </div>`;
                return;
            }
            if (!arr.some(e => e === null)) {
                document.body.innerHTML = `
                    <div class="win-screen">
                        <div class="win-text">
                            It's a Draw!
                        </div>
                        <button onclick="location.reload()" class="play-again-btn">
                            Play Again
                        </button>
                    </div>`;
            }
        }

        const h1 = document.getElementById('move');
        function Feature(ele) {
            const id = Number(ele.id);
            if (arr[id] != null) return;
            arr[id] = currentPlayer;
            ele.innerText = currentPlayer;
            ele.setAttribute('data-player', currentPlayer);
            
            checkWiner();
            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            h1.innerText = `${currentPlayer}'s Turn`;
        }