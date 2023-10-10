const localStorageKey="name-memory"
const named=document.getElementById("name-content")
const save=document.getElementById("invio")
const deleter=document.getElementById("cancella")
const salvataggio=() =>
{
    const name_text=named.value
    localStorage.setItem(localStorageKey,name_text)
    alert("salvataggio effettuato")
}
const cancella=() =>
{
    const finder=localStorage.getItem(localStorageKey)
    if(finder)
    {
        if(window.confirm('ATTENZIONE! Vuoi dimenticare come ti chiami?'))
        {
            localStorage.removeItem(localStorageKey)
        }
    }
    else
    {
        alert("nessun dato presente")
    }
}
save.addEventListener("click",salvataggio)
deleter.addEventListener("click", cancella)