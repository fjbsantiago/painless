// Replace field with literal string
{
    "query": {
        "match": {
            "city": "Aesmsterdam"
        }
    },
    "script": {
        "inline": "ctx._source.city = \"Amsterdam\"",
        "lang": "painless"
    }
}

// Multi-statement script
{
    "query": {
        "match": {
            "city": "Aesmsterdam"
        }
    },
    "script": {
        "inline": "ctx._source.city = \"Amsterdam\"; ctx._source.zip = \"1070 HL\";",
        "lang": "painless"
    }
}
