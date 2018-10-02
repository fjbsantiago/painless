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

// Extract sub-string from field using regex and setting new field with the extracted value
{
	"script": {
		"lang": "painless",
		"source": "Matcher match = /.*\"job_id\": \"([^\"]+)\".*/.matcher(ctx._source.text_field); if (match.matches()) { ctx._source.extracted_field = match.group(1); } else { throw new Exception(ctx._source.text_field); }"
	}
}
