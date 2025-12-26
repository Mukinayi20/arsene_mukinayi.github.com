import { computed } from "vue"

export function formatDate  (date){
    if(!date) return ''
    const d = new Date(date)
    return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export function voirPlusMooin (temoignag, showAll){
    const displayvue = computed(() => {
        if (showAll.value) {
            return temoignag.value.toReversed()
        }
        return temoignag.value.toReversed().slice(0, 3)
    })

    return displayvue
}