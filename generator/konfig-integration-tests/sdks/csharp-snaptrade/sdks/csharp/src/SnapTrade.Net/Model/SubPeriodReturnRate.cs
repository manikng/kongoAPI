/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = SnapTrade.Net.Client.OpenAPIDateConverter;

namespace SnapTrade.Net.Model
{
    /// <summary>
    /// SubPeriodReturnRate
    /// </summary>
    [DataContract(Name = "SubPeriodReturnRate")]
    public partial class SubPeriodReturnRate : IEquatable<SubPeriodReturnRate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SubPeriodReturnRate" /> class.
        /// </summary>
        /// <param name="periodStart">Date used to specify timeframe for a reporting call (in YYYY-MM-DD format).</param>
        /// <param name="periodEnd">Date used to specify timeframe for a reporting call (in YYYY-MM-DD format).</param>
        /// <param name="rateOfReturn">The return rate for the given period.</param>
        public SubPeriodReturnRate(DateTime periodStart = default(DateTime), DateTime periodEnd = default(DateTime), double? rateOfReturn = default(double?)) : base()
        {
            this.PeriodStart = periodStart;
            this.PeriodEnd = periodEnd;
            this.RateOfReturn = rateOfReturn;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// Date used to specify timeframe for a reporting call (in YYYY-MM-DD format)
        /// </summary>
        /// <value>Date used to specify timeframe for a reporting call (in YYYY-MM-DD format)</value>
        [DataMember(Name = "periodStart", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime PeriodStart { get; set; }

        /// <summary>
        /// Date used to specify timeframe for a reporting call (in YYYY-MM-DD format)
        /// </summary>
        /// <value>Date used to specify timeframe for a reporting call (in YYYY-MM-DD format)</value>
        [DataMember(Name = "periodEnd", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime PeriodEnd { get; set; }

        /// <summary>
        /// The return rate for the given period
        /// </summary>
        /// <value>The return rate for the given period</value>
        [DataMember(Name = "rateOfReturn", EmitDefaultValue = true)]
        public double? RateOfReturn { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SubPeriodReturnRate {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  PeriodStart: ").Append(PeriodStart).Append("\n");
            sb.Append("  PeriodEnd: ").Append(PeriodEnd).Append("\n");
            sb.Append("  RateOfReturn: ").Append(RateOfReturn).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as SubPeriodReturnRate);
        }

        /// <summary>
        /// Returns true if SubPeriodReturnRate instances are equal
        /// </summary>
        /// <param name="input">Instance of SubPeriodReturnRate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SubPeriodReturnRate input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.PeriodStart == input.PeriodStart ||
                    (this.PeriodStart != null &&
                    this.PeriodStart.Equals(input.PeriodStart))
                ) && base.Equals(input) && 
                (
                    this.PeriodEnd == input.PeriodEnd ||
                    (this.PeriodEnd != null &&
                    this.PeriodEnd.Equals(input.PeriodEnd))
                ) && base.Equals(input) && 
                (
                    this.RateOfReturn == input.RateOfReturn ||
                    (this.RateOfReturn != null &&
                    this.RateOfReturn.Equals(input.RateOfReturn))
                )
                && (this.AdditionalProperties.Count == input.AdditionalProperties.Count && !this.AdditionalProperties.Except(input.AdditionalProperties).Any());
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                if (this.PeriodStart != null)
                {
                    hashCode = (hashCode * 59) + this.PeriodStart.GetHashCode();
                }
                if (this.PeriodEnd != null)
                {
                    hashCode = (hashCode * 59) + this.PeriodEnd.GetHashCode();
                }
                if (this.RateOfReturn != null)
                {
                    hashCode = (hashCode * 59) + this.RateOfReturn.GetHashCode();
                }
                if (this.AdditionalProperties != null)
                {
                    hashCode = (hashCode * 59) + this.AdditionalProperties.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}