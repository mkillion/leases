<cfsetting requestTimeOut = "60" showDebugOutput = "yes">

<cfquery name="qLeases" datasource="plss">
    select
        kid
    from
        leases_og_mapper
    where
        kid in (select lease_kid from NOMENCLATURE.LEASES_PRODUCTION where operator_kid = #url.operator# <cfif #url.year# neq "undefined"> and year = #url.year#</cfif>) and operator_kid = #url.operator#
</cfquery>

<cfoutput>
    #ValueList(qLeases.kid,",")#
</cfoutput>
